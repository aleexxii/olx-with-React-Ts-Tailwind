import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKo4TBjmDSZy85SYjtDVO3KQJe2KCVq0o",
  authDomain: "olx-ts.firebaseapp.com",
  projectId: "olx-ts",
  storageBucket: "olx-ts.firebasestorage.app",
  messagingSenderId: "508964335728",
  appId: "1:508964335728:web:bbb53dcb0cd60b55f944b5"
};


const app = initializeApp(firebaseConfig);

export default app