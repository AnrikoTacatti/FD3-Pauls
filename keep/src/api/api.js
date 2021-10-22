// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set, get, child, push, update, remove, query, onValue, runTransaction, onChildChanged } from "firebase/database";
import { OPEN_FORM_TASK_ITEM_NEW, OPEN_FORM_TASK_ITEM_EDIT, TASKS_LOAD_REQUEST } from '../stores/const.js';

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
const dbRef = ref(database);

onChildChanged(ref(database, "keeps/sectionlist/"), (data) => {

  console.log("onChildChanged");
  console.log(data);
  /*setCommentValues(postElement, data.key, data.val().text, data.val().author);*/
});


export default {
  getTask(disparch) {
    return new Promise((resolve, reject) => {
      console.log("api loadTaskLists");
      get(child(dbRef, "keeps/sectionlist/")).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("keep firebase");
          console.log(snapshot.val());
          disparch({ type: 'TASKS_LOAD_REQUEST', tasklists: snapshot.val() });
          return snapshot.val()
        }
        else {
          console.log("no data found");
        }
      }).catch((error) => {
        console.log("unsaccessful error " + error);
      });
    });
  },
  setNewTaskCaption(title, disparch) {
    const db = getDatabase();
    // A post entry.
    const postData = {
      name: title
    };

    // Get a key for a new Post.
    /*const newPostKey = push(child(ref(db), 'TaskLists')).key;*/
    const newPostKey = generate_url(title);

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};

    set(ref(db, 'keeps/sectionlist/' + newPostKey), postData).then((snapshot) => {
      console.log("set keepCaption firebase");
      disparch({ type: TASKS_LOAD_REQUEST, tasklists: snapshot.val() });
    }).catch((error) => {
      console.log("unsaccessful error " + error);
    });
  },

  setTaskItem(data, dispatch) {
    const db = getDatabase();
    debugger;
    // A post entry.
    const postData = {
      name: data.title,
      text: data.text
    };
    // Get a key for a new Post.


    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['keeps/sectionlist/' + data.keychapter + "/itemlist/" + data.keyitem] = postData;
    return update(ref(db), updates).then((snapshot) => {
      console.log("set keepCaption firebase");
      /* disparch({ type: 'TASKS_LOAD_REQUEST', tasklists: snapshot.val() });*/
      dispatch({ type: OPEN_FORM_TASK_ITEM_EDIT, data: { active: false } });
      get(child(dbRef, "keeps/sectionlist/")).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("keep firebase");
          console.log(snapshot.val());
          dispatch({ type: 'TASKS_LOAD_REQUEST', tasklists: snapshot.val() });
          return snapshot.val()
        }
        else {
          console.log("no data found");
        }
      }).catch((error) => {
        console.log("unsaccessful error " + error);
      });
    }).catch((error) => {
      console.log("setTaskItem error " + error);
    });;
  }
  /*setNewTaskCaption(title) {
    const db = getDatabase();
    debugger;
    // A post entry.
    const postData = {
      name: title
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'TaskLists')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/TaskLists/' + newPostKey] = postData;
   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return update(ref(db), updates);
  }*/
}





function setNewTaskCaption(title) {
  const db = getDatabase();
  debugger;
  // A post entry.
  const postData = {
    name: title
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'TaskLists')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  /* updates['/TaskLists/' + newPostKey] = postData;
   updates['/user-posts/' + uid + '/' + newPostKey] = postData;
 
   return update(ref(db), updates);*/
}


/*
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

const starCountRef = ref(database, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});


function toggleStar(uid) {
  const db = getDatabase();
  const postRef = ref(db, '/posts/foo-bar-123');

  runTransaction(postRef, (post) => {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}

*/



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