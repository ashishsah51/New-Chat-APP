import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAho_au0zypvOzfGJ6IDY2OpgiFz0x_UGY",
  authDomain: "chat-app-33265.firebaseapp.com",
  projectId: "chat-app-33265",
  storageBucket: "chat-app-33265.appspot.com",
  messagingSenderId: "1082507443592",
  appId: "1:1082507443592:web:467de5dfea9d4e49e30e3d",
  //measurementId: "G-ZQ41L6ZBWS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();