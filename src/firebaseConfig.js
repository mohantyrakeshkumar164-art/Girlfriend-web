import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  "AIzaSyCrcIFHhR9oFLjk6_2dy1XPhtolJ8qQiq0",
  authDomain:  "our-forever-bf7be.firebaseapp.com",
  projectId: "our-forever-bf7be",
  storageBucket:  "our-forever-bf7be.firebasestorage.app",
  messagingSenderId: "47698708295",
  appId: "1:47698708295:web:30a8de1755f48c8f24ee62"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);