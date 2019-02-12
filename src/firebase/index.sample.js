import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

firebase.initializeApp(config);

export const db = firebase.firestore();
