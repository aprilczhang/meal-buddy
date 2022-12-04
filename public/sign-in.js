import { initializeApp } from 'https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js';
//import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB74ZoL9d5AbRNQ_b2QBkR78_RfsuOsgX0",
    authDomain: "meal-buddy2.firebaseapp.com",
    projectId: "meal-buddy2",
    storageBucket: "meal-buddy2.appspot.com",
    messagingSenderId: "120395499979",
    appId: "1:120395499979:web:6c0127a395d6a726044e4e"
  };
  

const app = initializeApp(firebaseConfig);

// Setting up Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

signInBtn.onclick = () => {
  signInWithPopup(auth, provider);
}

/*
onAuthStateChanged(auth, (user) => {
  // user argument is null if a user signs out.
  if (user) {
      // If a user signs in:
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
      //////// QUESTION 2: What happens when a user signs out? (The previous lines are a hint!) ////////
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false
      ////////
  }
  
});
*/


//signInBtn.onclick = () => signInWithPopup(auth, provider);

//const db = getFirestore(app);
//let likedRecipes = collection(db, "liked_recipes")



