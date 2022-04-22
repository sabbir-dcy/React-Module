// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7753_FP-TUGBsEqDVLE_qyqkOD13OXg4',
  authDomain: 'genius-car-services-cc03a.firebaseapp.com',
  projectId: 'genius-car-services-cc03a',
  storageBucket: 'genius-car-services-cc03a.appspot.com',
  messagingSenderId: '291341784364',
  appId: '1:291341784364:web:d3915d3bde458c323f8889',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
