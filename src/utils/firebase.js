// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXrCxrMSuTzwe5G3DbZJTTMZSqAZe5HWo",
  authDomain: "netflixgpt-7f1f4.firebaseapp.com",
  projectId: "netflixgpt-7f1f4",
  storageBucket: "netflixgpt-7f1f4.firebasestorage.app",
  messagingSenderId: "684972576638",
  appId: "1:684972576638:web:0a462e3898c00b5a4c2d2f",
  measurementId: "G-2PMF171P0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// have to do this myself
export const auth = getAuth(app);