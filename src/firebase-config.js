// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "chatapp-a5d7a.firebaseapp.com",
  projectId: "chatapp-a5d7a",
  storageBucket: "chatapp-a5d7a.appspot.com",
  messagingSenderId: "673864297654",
  appId: "1:673864297654:web:e8d185425b5b3a9625ca17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
