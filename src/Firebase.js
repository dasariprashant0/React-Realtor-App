// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW6TcqxrOI_CK3FLgYgict4rD3MozYi-o",
  authDomain: "react-realtor-app-bb95d.firebaseapp.com",
  projectId: "react-realtor-app-bb95d",
  storageBucket: "react-realtor-app-bb95d.appspot.com",
  messagingSenderId: "280562807167",
  appId: "1:280562807167:web:d3affcb48bf7d3996bea4a",
  measurementId: "G-LFLDXRT7QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)