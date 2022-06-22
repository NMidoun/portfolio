// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZStG4S_GP1lCHsAcB6WTpsVWCW-LXGQ",
  authDomain: "portfolio-c3647.firebaseapp.com",
  projectId: "portfolio-c3647",
  storageBucket: "portfolio-c3647.appspot.com",
  messagingSenderId: "907571843298",
  appId: "1:907571843298:web:ec64942fab1de81a0c4ebb",
  measurementId: "G-HMP7P8GGZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
