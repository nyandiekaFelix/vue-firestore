import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
  authDomain: "tut-store-1b594.firebaseapp.com",
  databaseURL: "https://tut-store-1b594.firebaseio.com",
  projectId: "tut-store-1b594",
  storageBucket: "tut-store-1b594.appspot.com",
  messagingSenderId: "80841664948"
};

firebase.initializeApp(config);
firestore().settings({ timestampsInSnapshots: true });
