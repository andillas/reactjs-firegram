// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDyZ4He8dwb4J4uMXdonEpFqH0tO28kqyA",
  authDomain: "ninja-firegram-b4c0c.firebaseapp.com",
  projectId: "ninja-firegram-b4c0c",
  storageBucket: "ninja-firegram-b4c0c.appspot.com",
  messagingSenderId: "851890773364",
  appId: "1:851890773364:web:07c4e17daa52068001a021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);

export { projectFirestore, projectStorage };

