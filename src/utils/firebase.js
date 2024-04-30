import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "intracker-base.firebaseapp.com",
  projectId: "intracker-base",
  storageBucket: "intracker-base.appspot.com",
  messagingSenderId: "633294640208",
  appId: "1:633294640208:web:245dc200e69fbce08b6d55",
  measurementId: "G-TZM9SKR1RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
