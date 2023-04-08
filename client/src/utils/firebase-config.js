
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZwsamXr-yLv4V-uEWNMvU8wVJeMJdZY4",
  authDomain: "netflix-971b5.firebaseapp.com",
  projectId: "netflix-971b5",
  storageBucket: "netflix-971b5.appspot.com",
  messagingSenderId: "405534502869",
  appId: "1:405534502869:web:64e54f606f0f18239e175c",
  measurementId: "G-GZVN2L03RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)