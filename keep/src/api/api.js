// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set, get, child, update, remove, query, onValue, runTransaction } from "firebase/database";


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


export default {
  getTask() {
    console.log("loadTaskLists");
    return get(child(dbRef, "keeps/sectionlist/")).then((snapshot) => {
      if (snapshot.exists()) { return snapshot.val() }
      else {
        console.log("no data found");
      }
    }).catch((error) => {
      console.log("unsaccessful error " + error);
    });
  }
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

function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}*/



