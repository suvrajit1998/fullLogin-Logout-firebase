import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBeqPBbvfHcolcSAjoYw-ivCg5PAqg6hw",
  authDomain: "auth-development-3105f.firebaseapp.com",
  databaseURL: "https://auth-development-3105f.firebaseio.com",
  projectId: "auth-development-3105f",
  storageBucket: "auth-development-3105f.appspot.com",
  messagingSenderId: "999551973710",
  appId: "1:999551973710:web:810ac1c3df1cfd6c70c61f",
  measurementId: "G-5HLD3KWXBT",
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export default app;
