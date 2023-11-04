// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWmeIMzzvXk9jZpUdyhHRUIMi7sn8vgN8",
  authDomain: "lab3-3c34b.firebaseapp.com",
  projectId: "lab3-3c34b",
  storageBucket: "lab3-3c34b.appspot.com",
  messagingSenderId: "909677443881",
  appId: "1:909677443881:web:3cec1e1c5bf0de1ffd5538",
  measurementId: "G-R6QP6BRDH0"
};

// Initialize Firebase
export const FIREBASE_APP= initializeApp(firebaseConfig)
export const FIREBASE_AUTH=getAuth(FIREBASE_APP)
export const FIRESTORE_DB=getFirestore(FIREBASE_APP)