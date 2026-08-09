import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth , 
        createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged,
    signOut
 } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore , 
    doc , getDoc , setDoc , serverTimestamp, collection, addDoc
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQ7sNbyvnWFAKCbKSd-31FJc4zCpBUZpE",
    authDomain: "fir-teaching-4bada.firebaseapp.com",
    projectId: "fir-teaching-4bada",
    storageBucket: "fir-teaching-4bada.firebasestorage.app",
    messagingSenderId: "47706482978",
    appId: "1:47706482978:web:c76868893353a7ab71dd7b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)

  export {auth , db ,  doc , getDoc , setDoc , serverTimestamp , 
    createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged,
    signOut , collection, addDoc
  }