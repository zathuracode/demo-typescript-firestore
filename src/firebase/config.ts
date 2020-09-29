import firebase  from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbn87sMOzYFdV6eVmERRMLMmxwwbrnJHE",
    authDomain: "sql-demos-758b7.firebaseapp.com",
    databaseURL: "https://sql-demos-758b7.firebaseio.com",
    projectId: "sql-demos-758b7",
    storageBucket: "sql-demos-758b7.appspot.com",
    messagingSenderId: "151399039046",
    appId: "1:151399039046:web:8d3a3c84fd3826ef4b0a47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase Config');

const db=firebase.firestore();

export default db;