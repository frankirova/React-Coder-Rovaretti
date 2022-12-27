// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAr-WcUD69226xIl2wYDEC5ci-ELh19XsA",
  authDomain: "realtech-ecomerce-react-coder.firebaseapp.com",
  projectId: "realtech-ecomerce-react-coder",
  storageBucket: "realtech-ecomerce-react-coder.appspot.com",
  messagingSenderId: "882960034933",
  appId: "1:882960034933:web:fd840b141d03273f749c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)