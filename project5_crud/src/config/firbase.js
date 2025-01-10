// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQH1h4Ohh8oJxv3_MqRoD4rDfiP2jtKGE",
  authDomain: "crud-425aa.firebaseapp.com",
  projectId: "crud-425aa",
  storageBucket: "crud-425aa.firebasestorage.app",
  messagingSenderId: "869523477093",
  appId: "1:869523477093:web:a426c0f186edca0b68ec8c",
  measurementId: "G-ZR58C97LXB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)