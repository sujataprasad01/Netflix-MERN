import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBA3VZoUx4ll0o9RfqsYPrfRWoX55htWTQ",
  authDomain: "react-netflix-clone-6d9a7.firebaseapp.com",
  projectId: "react-netflix-clone-6d9a7",
  storageBucket: "react-netflix-clone-6d9a7.appspot.com",
  messagingSenderId: "602607616923",
  appId: "1:602607616923:web:8bcedd4328171229f1573e",
  measurementId: "G-KRGL8GBW05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
