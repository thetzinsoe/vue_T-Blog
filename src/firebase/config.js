import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcQNob5fSZ3WCoWQilkjgkHrajztgFDQs",
  authDomain: "t-blog-vue.firebaseapp.com",
  projectId: "t-blog-vue",
  storageBucket: "t-blog-vue.appspot.com",
  messagingSenderId: "52346415619",
  appId: "1:52346415619:web:38b16b92780827dac9fc36",
  measurementId: "G-1MJ9TLN4JJ",
};
// init firebase
firebase.initializeApp(firebaseConfig);
// setup database
let db = firebase.firestore();
export { db };
