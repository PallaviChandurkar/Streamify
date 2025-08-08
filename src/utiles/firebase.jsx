// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoEfL00rO3OAPqKBZObbImy-8lSVDMFMg",
  authDomain: "streamify-5eceb.firebaseapp.com",
  projectId: "streamify-5eceb",
  storageBucket: "streamify-5eceb.firebasestorage.app",
  messagingSenderId: "198146227635",
  appId: "1:198146227635:web:641a47d3fc295282b95fc6",
  measurementId: "G-2GJG46CXC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();