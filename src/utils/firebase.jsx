// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHcfe-9JEu1Lp9pTwR0Zy7ZCONRhgB3pU",
  authDomain: "netflixgpt-2840c.firebaseapp.com",
  projectId: "netflixgpt-2840c",
  storageBucket: "netflixgpt-2840c.firebasestorage.app",
  messagingSenderId: "976843709250",
  appId: "1:976843709250:web:7e0233fe4db8f5b48a46db",
  measurementId: "G-C2ZWV5BMHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();