// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlpGVx1DDLs46uwXiWq07vvmRk5Hxy3fA",
  authDomain: "simple-firebase-auth-2bb81.firebaseapp.com",
  projectId: "simple-firebase-auth-2bb81",
  storageBucket: "simple-firebase-auth-2bb81.appspot.com",
  messagingSenderId: "279421924825",
  appId: "1:279421924825:web:bd0cd41ad616044b0d95c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app