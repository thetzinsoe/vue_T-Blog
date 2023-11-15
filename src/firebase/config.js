import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcQNob5fSZ3WCoWQilkjgkHrajztgFDQs",
  authDomain: "t-blog-vue.firebaseapp.com",
  projectId: "t-blog-vue",
  storageBucket: "t-blog-vue.appspot.com",
  messagingSenderId: "52346415619",
  appId: "1:52346415619:web:38b16b92780827dac9fc36",
  measurementId: "G-1MJ9TLN4JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAcQNob5fSZ3WCoWQilkjgkHrajztgFDQs",
//   authDomain: "t-blog-vue.firebaseapp.com",
//   projectId: "t-blog-vue",
//   storageBucket: "t-blog-vue.appspot.com",
//   messagingSenderId: "52346415619",
//   appId: "1:52346415619:web:38b16b92780827dac9fc36",
//   measurementId: "G-1MJ9TLN4JJ",
// };
// firebase.initializeApp(firebaseConfig);

// // Now you can use firestore
// const db = firebase.firestore();
// export { db };
