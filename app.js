// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyfTOZ8C2wRkXkQLSDY1tmn86d4yd2Rqc",
  authDomain: "marifer-33.firebaseapp.com",
  projectId: "marifer-33",
  storageBucket: "marifer-33.appspot.com",
  messagingSenderId: "178207795146",
  appId: "1:178207795146:web:7f66cfada47abf3c855133",
  measurementId: "G-T5TVTM83LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);