// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKr3HmMS8IEykgWGlYwm42HkVr5kMYSas",
  authDomain: "inprojuy-f1173.firebaseapp.com",
  projectId: "inprojuy-f1173",
  storageBucket: "inprojuy-f1173.appspot.com",
  messagingSenderId: "752172358676",
  appId: "1:752172358676:web:94e465703ad362877b1b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)