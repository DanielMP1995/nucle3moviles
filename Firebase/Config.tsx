
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6gA9wdrHzp8bkyeWFDvATDHPQbc7Sm1M",
  authDomain: "proyec3nucleo.firebaseapp.com",
  projectId: "proyec3nucleo",
  storageBucket: "proyec3nucleo.firebasestorage.app",
  messagingSenderId: "995752153772",
  appId: "1:995752153772:web:2b1c8553652700b2df8509"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)

