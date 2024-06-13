// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth} from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAibLTYWH5vx1qoLEE1-ahqhXy_TnmSQYc",
  authDomain: "actividadproductos.firebaseapp.com",
  projectId: "actividadproductos",
  storageBucket: "actividadproductos.appspot.com",
  messagingSenderId: "781307039257",
  appId: "1:781307039257:web:af5dd71f0dcfbe7a56e488",
  databaseURL:"https://actividadproductos-default-rtdb.firebaseio.com/"
};

const firebase = initializeApp(firebaseConfig);

export const dbRealTime =getDatabase(firebase);