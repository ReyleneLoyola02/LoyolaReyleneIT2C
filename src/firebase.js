// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm1DmV2JdPqEBt7-no1e-i-FW7D5AFqhQ",
  authDomain: "testprojectfirebase-4b169.firebaseapp.com",
  databaseURL:"https://testprojectfirebase-4b169-default-rtdb.firebaseio.com/",
  projectId: "testprojectfirebase-4b169",
  storageBucket: "testprojectfirebase-4b169.appspot.com",
  messagingSenderId: "38038938009",
  appId: "1:38038938009:web:6b93194edfea1bc691b308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);