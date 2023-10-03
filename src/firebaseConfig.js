// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63srmDqvAMEI7AsC9y1wI4kOi3UHWJko",
  authDomain: "fir-auth-393fc.firebaseapp.com",
  projectId: "fir-auth-393fc",
  storageBucket: "fir-auth-393fc.appspot.com",
  messagingSenderId: "998034625457",
  appId: "1:998034625457:web:3efa6f0fed342fdad32390",
  measurementId: "G-Q34EZGEN77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;