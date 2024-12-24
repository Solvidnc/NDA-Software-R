import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAuCzBd1gNMGGQpE_XtDHt2aG_rh485ZG8",
  authDomain: "ndawebsite-a36be.firebaseapp.com",
  databaseURL: "https://ndawebsite-a36be-default-rtdb.firebaseio.com",
  projectId: "ndawebsite-a36be",
  storageBucket: "ndawebsite-a36be.firebasestorage.app",
  messagingSenderId: "465375483037",
  appId: "1:465375483037:web:c39fc8659e05fdb258b074",
  measurementId: "G-2B98VBVMVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };