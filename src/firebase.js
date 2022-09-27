import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoVnyQw5-D2K3uboESeBB-2a3DqInMua8",
  authDomain: "linkedin-clone-6eeba.firebaseapp.com",
  projectId: "linkedin-clone-6eeba",
  storageBucket: "linkedin-clone-6eeba.appspot.com",
  messagingSenderId: "409781914762",
  appId: "1:409781914762:web:dfcf38a5f672eeea9bf173",
  measurementId: "G-H2JJBKQPRY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
