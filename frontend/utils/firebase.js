// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "apnaai-a1e05.firebaseapp.com",
  projectId: "apnaai-a1e05",
  storageBucket: "apnaai-a1e05.firebasestorage.app",
  messagingSenderId: "34691439720",
  appId: "1:34691439720:web:3e110757bc36b19b9befdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()