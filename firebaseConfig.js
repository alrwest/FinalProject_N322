// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDegGNwKZu1yW6yEpwKVoItlyVZjzGjd-w",
  authDomain: "finalproject-n322.firebaseapp.com",
  projectId: "finalproject-n322",
  storageBucket: "finalproject-n322.appspot.com",
  messagingSenderId: "320454965673",
  appId: "1:320454965673:web:431671ea2de553224e2cb8",
  measurementId: "G-1XW0EHCPX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { app, auth, getApp, getAuth };
