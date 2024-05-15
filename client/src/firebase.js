// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e7844.firebaseapp.com",
  projectId: "mern-estate-e7844",
  storageBucket: "mern-estate-e7844.appspot.com",
  messagingSenderId: "378048138927",
  appId: "1:378048138927:web:efbb933ec0e87b1ad54e5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);