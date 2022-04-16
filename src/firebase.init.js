// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvE6H0yb765Zgx_4DlhaR-KCXJ6ue0vUA",
  authDomain: "health-care-services-b083b.firebaseapp.com",
  projectId: "health-care-services-b083b",
  storageBucket: "health-care-services-b083b.appspot.com",
  messagingSenderId: "650998462457",
  appId: "1:650998462457:web:e9dc16bc0015da7380af28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;