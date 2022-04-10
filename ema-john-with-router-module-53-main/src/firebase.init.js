import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqlFsX3wQFXX6O1KUXR6U_4GOJtnhWUc",
  authDomain: "ema-john-simple-afc1c.firebaseapp.com",
  projectId: "ema-john-simple-afc1c",
  storageBucket: "ema-john-simple-afc1c.appspot.com",
  messagingSenderId: "24904816123",
  appId: "1:24904816123:web:36f449e7b704fe35e2275e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)