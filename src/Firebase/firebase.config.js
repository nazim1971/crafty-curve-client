// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7hs3hYL138b7Z16md9YQFEe_LiiZPeEs",
  authDomain: "crafty-carve.firebaseapp.com",
  projectId: "crafty-carve",
  storageBucket: "crafty-carve.appspot.com",
  messagingSenderId: "171523830878",
  appId: "1:171523830878:web:d90131543dd227c6fd70cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;