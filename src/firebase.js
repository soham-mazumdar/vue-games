// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUM0ReK07RGfrefoTa4ETPoqjYrbM0CmQ",
  authDomain: "vue-git.firebaseapp.com",
  projectId: "vue-git",
  storageBucket: "vue-git.firebasestorage.app",
  messagingSenderId: "1023184041734",
  appId: "1:1023184041734:web:5bfb7442c88f384e03d087"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export {auth,db, firebaseApp}