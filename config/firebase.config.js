// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_BASE_API_KEY,
  authDomain: "applepay-43dab.firebaseapp.com",
  projectId: "applepay-43dab",
  storageBucket: "applepay-43dab.firebasestorage.app",
  messagingSenderId: "343607026494",
  appId: "1:343607026494:web:421b3c60894adebeed826f",
};

// Initialize Firebase
const app= getApps().length === 0 ? initializeApp(firebaseConfig) : getApp ();
const db= getFirestore(app); 
const storage = getStorage(app);

export{db, storage};