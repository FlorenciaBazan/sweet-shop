// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHhz0lHC2uTMm06iduXyjwWA2569vLlbA",
  authDomain: "sweet-shop-c7eb2.firebaseapp.com",
  projectId: "sweet-shop-c7eb2",
  storageBucket: "sweet-shop-c7eb2.appspot.com",
  messagingSenderId: "4862387398",
  appId: "1:4862387398:web:96fabfd04d00a7467263c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);