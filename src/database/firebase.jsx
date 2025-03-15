import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWf3YymwWxP2jmtPsQql7vD5Rh1OdLcoY",
  authDomain: "scholaria-d56f9.firebaseapp.com",
  projectId: "scholaria-d56f9",
  storageBucket: "scholaria-d56f9.firebasestorage.app",
  messagingSenderId: "670184845200",
  appId: "1:670184845200:web:2edb97d9ae975e55ea4d15",
  measurementId: "G-WVLLT3J20W"
};

// Inicializa Firebase
const appfirebase = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(appfirebase);

// Inicializa Authentication
const auth = getAuth(appfirebase);

export { appfirebase, db, auth };
