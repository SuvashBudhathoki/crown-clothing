import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVrJQ_ZWT1TZu0-nWOMTDYepG2EqoHxME",
  authDomain: "crwn-db-7fa16.firebaseapp.com",
  databaseURL: "https://crwn-db-7fa16.firebaseio.com",
  projectId: "crwn-db-7fa16",
  storageBucket: "crwn-db-7fa16.appspot.com",
  messagingSenderId: "941385794693",
  appId: "1:941385794693:web:1d143863ff24cbf8b655ec"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
