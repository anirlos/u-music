// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}`,
  authDomain: `${process.env.REACT_APP_GOOGLE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_GOOGLE_PROJAECT_ID}`,
  storageBucket: `${process.env.REACT_APP_GOOGLE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_GOOGLE_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_GOOGLE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_GOOGLE_MEASUREMENT_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
