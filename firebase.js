import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyXbafVYJhwASlpda6-euqOLYMsz4gaNk",
  authDomain: "wash-and-go-5fc6f.firebaseapp.com",
  projectId: "wash-and-go-5fc6f",
  storageBucket: "wash-and-go-5fc6f.appspot.com",
  messagingSenderId: "625238359559",
  appId: "1:625238359559:web:7b18396ebe2fe9989874a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
