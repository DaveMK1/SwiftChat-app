// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu1Nw0-ZBh39F5CYkTsf4fak2KAMRmUyY",
  authDomain: "swiftchat-app-ee1f8.firebaseapp.com",
  projectId: "swiftchat-app-ee1f8",
  storageBucket: "swiftchat-app-ee1f8.appspot.com",
  messagingSenderId: "392270388760",
  appId: "1:392270388760:web:86de46b361bd68f9992d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}
