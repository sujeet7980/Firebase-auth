import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-4MjloZGT7dZRBy5_GltJ23f4Axj7L18",
  authDomain: "fir-auth-6a61d.firebaseapp.com",
  projectId: "fir-auth-6a61d",
  storageBucket: "fir-auth-6a61d.appspot.com",
  messagingSenderId: "338103372805",
  appId: "1:338103372805:web:625c78566055ecd81fe06c",
  measurementId: "G-H0H0YYRKFR"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth };