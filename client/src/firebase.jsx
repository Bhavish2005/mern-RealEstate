// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-estate-e2066.firebaseapp.com",
  projectId: "mern-estate-e2066",
  storageBucket: "mern-estate-e2066.firebasestorage.app",
  messagingSenderId: "324030086843",
  appId: "1:324030086843:web:3c42c366e60574c49d739e",
  measurementId: "G-M2KDELNGTR"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);