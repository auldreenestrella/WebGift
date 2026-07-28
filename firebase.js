import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFS49ua3GfopN6lnsoKLierUaXRe_CGf8",
  authDomain: "giftweb-df873.firebaseapp.com",
  projectId: "giftweb-df873",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
