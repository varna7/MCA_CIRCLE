// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use'
import firebase from 'firebase/compat/app'
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import  "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD05ieFTz938qqvpTo7CYywUuaKTjAGYa4",
  authDomain: "mca-circle.firebaseapp.com",
  projectId: "mca-circle",
  storageBucket: "mca-circle.appspot.com",
  messagingSenderId: "248200196186",
  appId: "1:248200196186:web:ba7cebe350ec94f4a7e863"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);


export const db = firebase.firestore()
export default  app;