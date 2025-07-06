// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTgCGB4y_v1TwoNNS3EpcKZez4S4ZzrA",
  authDomain: "coffee-store-app-20918.firebaseapp.com",
  projectId: "coffee-store-app-20918",
  storageBucket: "coffee-store-app-20918.firebasestorage.app",
  messagingSenderId: "1002247018855",
  appId: "1:1002247018855:web:0315d115a5e2f5299177c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)









