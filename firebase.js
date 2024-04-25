import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnksobuxv2omhd9U1hfzy9FexZWisRYs8",
    authDomain: "laundryapp-d34c9.firebaseapp.com",
    projectId: "laundryapp-d34c9",
    storageBucket: "laundryapp-d34c9.appspot.com",
    messagingSenderId: "79514806929",
    appId: "1:79514806929:web:6b38ee8fc9ec325236ed30",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { auth, db };
