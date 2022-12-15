// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWdfLHsx2AbIzO2nhii8m11MOJ6yW0xA",
  authDomain: "eo-portal.firebaseapp.com",
  projectId: "eo-portal",
  storageBucket: "eo-portal.appspot.com",
  messagingSenderId: "1043683996809",
  appId: "1:1043683996809:web:f720db6c4cbe7ded918258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;