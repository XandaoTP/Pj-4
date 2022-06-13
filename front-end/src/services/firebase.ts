import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4FMQldzYl42E5wYz1ezVbySAA6j58DEs",
  authDomain: "eco-taxi-a7a40.firebaseapp.com",
  projectId: "eco-taxi-a7a40",
  storageBucket: "eco-taxi-a7a40.appspot.com",
  messagingSenderId: "988652276946",
  appId: "1:988652276946:web:f670954a9506953a33310b"
};

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)

export const db = getFirestore(app)

