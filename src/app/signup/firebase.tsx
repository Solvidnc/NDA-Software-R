import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNBJl6KcjDuzG1Z0J6nJXvkrzh5LFN_2c",
  authDomain: "ndawebsite-2b91d.firebaseapp.com",
  projectId: "ndawebsite-2b91d",
  storageBucket: "ndawebsite-2b91d.firebasestorage.app",
  messagingSenderId: "615515239063",
  appId: "1:615515239063:web:52c977e88d6cbc57b82fd2",
  measurementId: "G-69C3YNMFK9",
  databaseURL: "https://ndawebsite-2b91d-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };