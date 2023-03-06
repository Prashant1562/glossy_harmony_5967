// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeOtNnSJq0cWkBMvX61ynvYCF7z-S4QDs",
  authDomain: "pepperfry-clone.firebaseapp.com",
  projectId: "pepperfry-clone",
  storageBucket: "pepperfry-clone.appspot.com",
  messagingSenderId: "639096472203",
  appId: "1:639096472203:web:1608444d92b592bf310a8e",
  measurementId: "G-RCXM4H2RBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export default app