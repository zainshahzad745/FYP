import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeZVOPwmxgmRHdzhKSsXrv5ilcRzNQSb8",
  authDomain: "cropcheck-b9197.firebaseapp.com",
  projectId: "cropcheck-b9197",
  storageBucket: "cropcheck-b9197.appspot.com",
  messagingSenderId: "288863166506",
  appId: "1:288863166506:web:4e0f11e901f468b90c2353"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);