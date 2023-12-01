// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVtPSKyCQGUj3KQSasvbbn9Kx6fQNTjXc",
  authDomain: "not-yt-clone-3f0dd.firebaseapp.com",
  projectId: "not-yt-clone-3f0dd",
  storageBucket: "not-yt-clone-3f0dd.appspot.com",
  messagingSenderId: "1094922268008",
  appId: "1:1094922268008:web:63f0720258cb2ead1c3add"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };