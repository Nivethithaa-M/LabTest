// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQyS-ZECsxwh7fGx5EwzVE4-Kqgi4mlxo",
  authDomain: "mobileapp-2b2d0.firebaseapp.com",
  projectId: "mobileapp-2b2d0",
  storageBucket: "mobileapp-2b2d0.appspot.com",
  messagingSenderId: "573115516083",
  appId: "1:573115516083:web:15ec58a2dbc58289a4dcc6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const fireStore = firebase.firestore();
const db = app.firestore();

export { auth, app,db, fireStore, firebase };
