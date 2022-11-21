// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqZkxYvGjNLNU9x4HPVPeyXFeDZ0wS7U8",
    authDomain: "internative-4f99f.firebaseapp.com",
    projectId: "internative-4f99f",
    storageBucket: "internative-4f99f.appspot.com",
    messagingSenderId: "736685579125",
    appId: "1:736685579125:web:7b7273bc5ce9eca62ad13c",
    measurementId: "G-G9MREWC365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;