// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBni_IOt3O2hXuhNdgouv-gkCB5hMfnung",
  authDomain: "coffee-store-9678c.firebaseapp.com",
  projectId: "coffee-store-9678c",
  storageBucket: "coffee-store-9678c.appspot.com",
  messagingSenderId: "953277475576",
  appId: "1:953277475576:web:400f92f10f8265ed34e90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
