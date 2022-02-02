import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyZ4He8dwb4J4uMXdonEpFqH0tO28kqyA",
    authDomain: "ninja-firegram-b4c0c.firebaseapp.com",
    projectId: "ninja-firegram-b4c0c",
    storageBucket: "ninja-firegram-b4c0c.appspot.com",
    messagingSenderId: "851890773364",
    appId: "1:851890773364:web:07c4e17daa52068001a021"
 };

 firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();

 export {projectStorage, projectFirestore};