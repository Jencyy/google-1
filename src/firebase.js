// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsM08HxxA8iWz_9_leOPO1KMTzfPSTMQs",
  authDomain: "contect-clone.firebaseapp.com",
  projectId: "contect-clone",
  storageBucket: "contect-clone.appspot.com",
  messagingSenderId: "1084739615527",
  appId: "1:1084739615527:web:dce59b4c054d44f5044702",
  measurementId: "G-L4CNBMGWR7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app)