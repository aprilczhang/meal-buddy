import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB74ZoL9d5AbRNQ_b2QBkR78_RfsuOsgX0",
  authDomain: "meal-buddy2.firebaseapp.com",
  databaseURL: "https://meal-buddy2-default-rtdb.firebaseio.com",
  projectId: "meal-buddy2",
  storageBucket: "meal-buddy2.appspot.com",
  messagingSenderId: "120395499979",
  appId: "1:120395499979:web:6c0127a395d6a726044e4e"
};
  

const app = initializeApp(firebaseConfig);

// Setting up Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


//signInBtn.onclick = () => {signInWithPopup(auth, provider);}