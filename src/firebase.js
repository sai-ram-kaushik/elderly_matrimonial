// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCskZEg3v2XViROhAc4nCZ4MSGwfRJlQr4",
  authDomain: "elderly-36922.firebaseapp.com",
  projectId: "elderly-36922",
  storageBucket: "elderly-36922.appspot.com",
  messagingSenderId: "54732456636",
  appId: "1:54732456636:web:a4c787fa087724105146b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();