// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARtszxWK_rPNVqvpGkmltOqGnAoSDuzlw",
  authDomain: "hotel-bilashita.firebaseapp.com",
  projectId: "hotel-bilashita",
  storageBucket: "hotel-bilashita.appspot.com",
  messagingSenderId: "1023055184877",
  appId: "1:1023055184877:web:d6fd4111fa6e9c79531de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;