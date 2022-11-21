import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqZkxYvGjNLNU9x4HPVPeyXFeDZ0wS7U8",
    authDomain: "internative-4f99f.firebaseapp.com",
    projectId: "internative-4f99f",
    storageBucket: "internative-4f99f.appspot.com",
    messagingSenderId: "736685579125",
    appId: "1:736685579125:web:7b7273bc5ce9eca62ad13c",
    measurementId: "G-G9MREWC365"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const productCollection = db.ref("data/product");