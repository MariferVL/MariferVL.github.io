import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'

import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js'


const firebaseConfig = {
  apiKey: "AIzaSyCyfTOZ8C2wRkXkQLSDY1tmn86d4yd2Rqc",
  authDomain: "marifer-33.firebaseapp.com",
  projectId: "marifer-33",
  storageBucket: "marifer-33.appspot.com",
  messagingSenderId: "178207795146",
  appId: "1:178207795146:web:7f66cfada47abf3c855133",
  measurementId: "G-T5TVTM83LK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);