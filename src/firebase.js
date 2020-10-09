import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-zTuyhj0-3XgoVqBuzmCPb6ZaqbdouWY",
  authDomain: "developers-path.firebaseapp.com",
  databaseURL: "https://developers-path.firebaseio.com",
  projectId: "developers-path",
  storageBucket: "developers-path.appspot.com",
  messagingSenderId: "185378265930",
  appId: "1:185378265930:web:4be4b7077773e32a3cbfb3",
  measurementId: "G-N6KJJSS9FB"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const FieldValue = firebase.firestore.FieldValue;
// const ServerValue = firebase.database.ServerValue;

export { db, auth, FieldValue, firebase };
