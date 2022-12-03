import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
//import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
//import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIbA-yFfudWJvHgFcO9ND5Rp2d16-EXng",
    authDomain: "meal-buddy-2217f.firebaseapp.com",
    projectId: "meal-buddy-2217f",
    storageBucket: "meal-buddy-2217f.appspot.com",
    messagingSenderId: "909590261065",
    appId: "1:909590261065:web:76940c9b3afae5b4e1fe98"
};

const app = initializeApp(firebaseConfig);

// Setting up Authentication
const auth = getAuth(app);

export {auth}
const provider = new GoogleAuthProvider();


signInBtn.onclick = () => signInWithPopup(auth, provider);

/*
onAuthStateChanged(auth, (user) => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});

// Setting up Firestore database
const db = getFirestore(app);
*/