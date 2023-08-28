import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { onLCP, onFID, onCLS } from 'web-vitals';


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
const perf = getPerformance(app);

onCLS(metric => {
  perf.trace('onCLS').putMetric('value', metric.value);
});

// Instrument onFID
onFID(metric => {
  perf.trace('onFID').putMetric('value', metric.value);
});

// Instrument onLCP
onLCP(metric => {
  perf.trace('onLCP').putMetric('value', metric.value);
});

