// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
