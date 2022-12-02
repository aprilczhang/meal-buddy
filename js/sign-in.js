import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp, orderBy } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIbA-yFfudWJvHgFcO9ND5Rp2d16-EXng",
    authDomain: "meal-buddy-2217f.firebaseapp.com",
    projectId: "meal-buddy-2217f",
    storageBucket: "meal-buddy-2217f.appspot.com",
    messagingSenderId: "909590261065",
    appId: "1:909590261065:web:76940c9b3afae5b4e1fe98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

signInBtn.onclick = () => signInWithPopup(auth, provider);

signOutBtn.onclick = () => {
    signOut(auth, provider);
    location.reload()
}
