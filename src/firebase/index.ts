import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAgBuN1ODEeAJr6atj9Zffgfg0Pehc1S70",
  authDomain: "personal-website-4ee35.firebaseapp.com",
  projectId: "personal-website-4ee35",
  storageBucket: "personal-website-4ee35.appspot.com",
  messagingSenderId: "656989828488",
  appId: "1:656989828488:web:6888c2f29f4f13e75bb63d",
  measurementId: "G-0FVKDPE37J",
});

export const db = app.firestore();

export default app;
