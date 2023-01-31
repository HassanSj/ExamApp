// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9aWOd5eeqBpolzN80eiMMGo4grTGn5Y8",
  authDomain: "exam-344f2.firebaseapp.com",
  projectId: "exam-344f2",
  storageBucket: "exam-344f2.appspot.com",
  messagingSenderId: "412866603967",
  appId: "1:412866603967:web:a6118f0fc2e2feafc84f0a",
  measurementId: "G-0EMTL56KWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
