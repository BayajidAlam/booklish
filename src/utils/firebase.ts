import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDum0L8cOCNWBcYytBRntfCjI2Y3qXODPY",
  authDomain: "booklish-2bbc5.firebaseapp.com",
  projectId: "booklish-2bbc5",
  storageBucket: "booklish-2bbc5.appspot.com",
  messagingSenderId: "163920158653",
  appId: "1:163920158653:web:0ce1f5c54b16201223fcd4",
  measurementId: "G-7Z5ZKNK6MY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)