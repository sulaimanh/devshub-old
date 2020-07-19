import "firebase/firestore";

import firebase from "firebase/app";

const firebaseApp = firebase.initializeApp({});

const db = firebaseApp.firestore();

export { db };
