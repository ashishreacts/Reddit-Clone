import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcYII_-M1SCVlE0ivs_8hFdW6-AGDO4p0",
  authDomain: "login-logout-auth-c76ee.firebaseapp.com",
  projectId: "login-logout-auth-c76ee",
  storageBucket: "login-logout-auth-c76ee.appspot.com",
  messagingSenderId: "909720312543",
  appId: "1:909720312543:web:8a2edbda55c6894892676a",
  measurementId: "G-DLB37XS422",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
