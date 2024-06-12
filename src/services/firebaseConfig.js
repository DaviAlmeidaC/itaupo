import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyArpPbzWnjmtnIfIEmyVJL6pNFPtojk5Gg",
  authDomain: "itapu-b24d0.firebaseapp.com",
  databaseURL: "https://itapu-b24d0-default-rtdb.firebaseio.com",
  projectId: "itapu-b24d0",
  storageBucket: "itapu-b24d0.appspot.com",
  messagingSenderId: "12821980310",
  appId: "1:12821980310:web:8a9bbb5b964f1b9d664eb7",
  measurementId: "G-XVC6S7L8JZ"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth;

export { database, auth };
