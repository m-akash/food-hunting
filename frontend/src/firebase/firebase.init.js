// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQAZwx4ZS8t8cvgeRymUxup34ua3yQaq4",
  authDomain: "hunger-hub-2908c.firebaseapp.com",
  projectId: "hunger-hub-2908c",
  storageBucket: "hunger-hub-2908c.firebasestorage.app",
  messagingSenderId: "746681816777",
  appId: "1:746681816777:web:3eb22bc455504d8e019f18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
