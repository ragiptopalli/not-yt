import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0tlsGMIyZiTjlqJc7Vi2nL7xe2fNg81M",
  authDomain: "yt-not-really.firebaseapp.com",
  projectId: "yt-not-really",
  storageBucket: "yt-not-really.appspot.com",
  messagingSenderId: "801106800666",
  appId: "1:801106800666:web:4526d0155510ede4e3e1a3",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
