import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp5NOTG0gfVV5AoDVHgK8SZB8NYUpqg98",
  authDomain: "nodewithfirebase-a4f45.firebaseapp.com",
  projectId: "nodewithfirebase-a4f45",
  storageBucket: "nodewithfirebase-a4f45.appspot.com",
  messagingSenderId: "976420143413",
  appId: "1:976420143413:web:de2e86c77cf547bb380c7c",
  measurementId: "G-9WEF3S6TRE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
