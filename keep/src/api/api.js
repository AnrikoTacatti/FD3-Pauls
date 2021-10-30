// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set, get, child, push, update, remove, query, onValue, runTransaction, onChildChanged, serverTimestamp } from "firebase/database";
import { OPEN_FORM_TASK_ITEM_NEW, OPEN_FORM_TASK_ITEM_EDIT, OPEN_FORM_NEW_TASK_CAPTION, OPEN_FORM_EDIT_TASK_CAPTION, TASKS_LOAD_REQUEST } from '../stores/const.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARf0pxLYWwCsRn5j7BXCWv81bsVFUkg8s",
  authDomain: "my-keep-329110.firebaseapp.com",
  databaseURL: "https://my-keep-329110-default-rtdb.firebaseio.com",
  projectId: "my-keep-329110",
  storageBucket: "my-keep-329110.appspot.com",
  messagingSenderId: "54375134452",
  appId: "1:54375134452:web:3af35a2e543508f5a79aa1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
const database = getDatabase();
console.log("дата");
console.log(serverTimestamp());



const dbRef = ref(database);

onChildChanged(ref(database, "keeps/sectionlist/"), (data) => {

  console.log("onChildChanged");
  console.log(data);
  /*setCommentValues(postElement, data.key, data.val().text, data.val().author);*/
});
function appGet(dispatch) {
  console.log("appGet");
  get(child(dbRef, "keeps/sectionlist/")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("keep firebase");
      console.log(snapshot.val());
      /* let taskLists = { ...snapshot.val() };
       let itemlist = [];
       for (let tasklistskey in taskLists) {
         for (let tasklistskeychild in taskLists[tasklistskey].itemlist) {
           itemlist.push(taskLists[tasklistskey].itemlist[tasklistskeychild])
         }
         taskLists[tasklistskey].itemlist = itemlist.sort((a, b) => b.time - a.time);
         itemlist = [];
       }*/

      dispatch({ type: TASKS_LOAD_REQUEST, tasklists: snapshot.val() });
      return snapshot.val()
    }
    else {
      console.log("no data found");
    }
  }).catch((error) => {
    console.log("unsaccessful error " + error);
  });
}

export default {
  getTask(disparch) {
    return new Promise((resolve, reject) => {
      console.log("api loadTaskLists");
      appGet(disparch);
    });
  },

  setNewTaskCaption(title, disparch) {
    const db = getDatabase();
    // A post entry.
    const url = generate_url(data.title);
    const postData = {
      name: title,
      url: url
    };
    // Get a key for a new Post.
    /*const newPostKey = push(child(ref(db), 'TaskLists')).key;*/
    const newPostKey = push(child(ref(db), 'TaskLists')).key;

    set(ref(db, 'keeps/sectionlist/' + newPostKey), postData).then((snapshot) => {
      console.log("setNewTaskCaption firebase");
      disparch({ type: OPEN_FORM_NEW_TASK_CAPTION, data: false });
      appGet(disparch);

    }).catch((error) => {
      console.log("unsaccessful error " + error);
    });
  },

  editTaskCaption(data, disparch) {
    const db = getDatabase();
    // A post entry.
    const postData = data.title;
    const url = generate_url(data.title);
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['keeps/sectionlist/' + data.keychapter + '/name'] = postData;
    updates['keeps/sectionlist/' + data.keychapter + '/url'] = url;
    return update(ref(db), updates).then((snapshot) => {
      console.log("editTaskCaption firebase");
      disparch({ type: OPEN_FORM_EDIT_TASK_CAPTION, data: { active: false } });
      appGet(disparch);
    }).catch((error) => {
      console.log("setTaskItem error " + error);
    });
  },
  removeTaskCaption(data, disparch) {
    const db = getDatabase();
    let del = 'keeps/sectionlist/' + data.keychapter;
    return remove(ref(db, del)).then(() => {
      console.log("removeTaskCaption firebase");
      appGet(disparch);
    }).catch((error) => {
      console.log("setTaskItem error " + error);
    });
  },


  setNewTaskItem(data, dispatch) {

    const db = getDatabase();
    // A post entry.
    const postData = {
      name: data.title,
      text: data.text,
      time: serverTimestamp()
    };
    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'TaskLists')).key;

    set(ref(db, 'keeps/sectionlist/' + data.keychapter + "/itemlist/" + newPostKey), postData).then(() => {
      console.log("setNewTaskItem  firebase");
      dispatch({ type: OPEN_FORM_TASK_ITEM_NEW, data: { active: false } });
      appGet(dispatch);
    }).catch((error) => {
      console.log("unsaccessful error " + error);
    });
  },

  setTaskItem(data, dispatch) {
    const db = getDatabase();

    // A post entry.
    const postData = {
      name: data.title,
      text: data.text,
      time: serverTimestamp()
    };
    const updates = {};
    updates['keeps/sectionlist/' + data.keychapter + "/itemlist/" + data.keyitem] = postData;
    return update(ref(db), updates).then(() => {
      console.log("setTaskItem firebase");
      dispatch({ type: OPEN_FORM_TASK_ITEM_EDIT, data: { active: false } });
      appGet(dispatch);
    }).catch((error) => {
      console.log("setTaskItem error " + error);
    });
  },

  removeTaskItem(data, dispatch) {
    debugger;
    const db = getDatabase();
    let del = 'keeps/sectionlist/' + data.keychapter + "/itemlist/" + data.keyitem;
    return remove(ref(db, del)).then(() => {
      console.log("remove TaskItem firebase");
      appGet(dispatch);
    }).catch((error) => {
      console.log("setTaskItem error " + error);
    });
  }
}


function generate_url(str) {
  var url = str.replace(/[\s]+/gi, '-');
  url = translit(url);
  url = url.replace(/[^0-9a-z_\-]+/gi, '').toLowerCase();
  return url;
}

function translit(str) {
  var ru = ("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-")
  var en = ("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya").split("-")
  var res = '';
  for (var i = 0, l = str.length; i < l; i++) {
    var s = str.charAt(i), n = ru.indexOf(s);
    if (n >= 0) { res += en[n]; }
    else { res += s; }
  }
  return res;
}