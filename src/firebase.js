import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV3SOijqAUDQIckOHc1_nLF0biiX1c7aM",
  authDomain: "not-yt-really.firebaseapp.com",
  projectId: "not-yt-really",
  storageBucket: "not-yt-really.appspot.com",
  messagingSenderId: "1080162400198",
  appId: "1:1080162400198:web:306938cf491794627964c7",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
