import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLrq8srBBvYJ9dr3Zgn1e7VkNRWG1CN58",
  authDomain: "flowerspot-c5367.firebaseapp.com",
  projectId: "flowerspot-c5367",
  storageBucket: "flowerspot-c5367.appspot.com",
  messagingSenderId: "96195505558",
  appId: "1:96195505558:web:1f42b2ef3699dcc0e741b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();