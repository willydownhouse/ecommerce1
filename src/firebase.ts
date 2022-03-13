// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "e-commerce1-eaf8c.firebaseapp.com",
  projectId: "e-commerce1-eaf8c",
  storageBucket: "e-commerce1-eaf8c.appspot.com",
  messagingSenderId: "487551646729",
  appId: "1:487551646729:web:e7b1e38ad18a9d62ca0cd8",
  measurementId: "G-F043HEDXWQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
