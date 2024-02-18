import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtdP8dFGu56Oe9SBtyhCrPx4_jpENsprg",
  authDomain: "login-functionality-bf2cd.firebaseapp.com",
  projectId: "login-functionality-bf2cd",
  storageBucket: "login-functionality-bf2cd.appspot.com",
  messagingSenderId: "877252888585",
  appId: "1:877252888585:web:c1c2f5b800481649ba50d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
