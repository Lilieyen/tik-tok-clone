import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnZG0ob3HsBowz-i2WNugiR1zJgpPqg-A",
    authDomain: "tik-tok-clone-24657.firebaseapp.com",
    projectId: "tik-tok-clone-24657",
    storageBucket: "tik-tok-clone-24657.appspot.com",
    messagingSenderId: "916575411672",
    appId: "1:916575411672:web:28a518fb7b2e8b4c14a6ad",
    measurementId: "G-DWH2QCNQF9"
  };

  const firebaseApp =
  firebase.initializeApp(firebaseConfig); //access to firebase app

  const db = firebaseApp.firestore(); //the database instance

  export default db;