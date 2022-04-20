
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFXJZXd5VgvwqNbUIkGV34sWZgnjYXovY",
  authDomain: "buscavet-3fafb.firebaseapp.com",
  projectId: "buscavet-3fafb",
  storageBucket: "buscavet-3fafb.appspot.com",
  messagingSenderId: "363200028575",
  appId: "1:363200028575:web:e3be6f8e04fddf8cf0e7aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google =  new GoogleAuthProvider();

export{
    app,
    db,
    google
}