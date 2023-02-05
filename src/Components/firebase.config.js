import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB9aWOd5eeqBpolzN80eiMMGo4grTGn5Y8",
  authDomain: "exam-344f2.firebaseapp.com",
  projectId: "exam-344f2",
  storageBucket: "exam-344f2.appspot.com",
  messagingSenderId: "412866603967",
  appId: "1:412866603967:web:a6118f0fc2e2feafc84f0a",
  measurementId: "G-0EMTL56KWV",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };
