// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVLfcBXhUeTnG1Dn1h03N26Ve1niQJsGU",
  authDomain: "time-capsule-6c371.firebaseapp.com",
  projectId: "time-capsule-6c371",
  storageBucket: "time-capsule-6c371.appspot.com",
  messagingSenderId: "912742300004",
  appId: "1:912742300004:web:f226f0837371c254e3a271"
};

// Firebase storage reference
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

