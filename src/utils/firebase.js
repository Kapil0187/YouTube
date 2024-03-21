// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOz5RfgN3nT6ByA5MAkSLK0KElEew-RMk",
  authDomain: "fir-d2277.firebaseapp.com",
  projectId: "fir-d2277",
  storageBucket: "fir-d2277.appspot.com",
  messagingSenderId: "388401975178",
  appId: "1:388401975178:web:181a5ee493a85770494273",
  measurementId: "G-1P5D1NE8TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();