// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHCqBb1FxxlCDuvqfTIC5X3kJbAYc2FpI",
  authDomain: "placementprep-289a3.firebaseapp.com",
  projectId: "placementprep-289a3",
  storageBucket: "placementprep-289a3.firebasestorage.app",
  messagingSenderId: "569673506842",
  appId: "1:569673506842:web:958ff8b6a661d77138f1a3",
  measurementId: "G-0QQLQY05B7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

