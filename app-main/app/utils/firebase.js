import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEjsFLl7hq9nmKT4MavVFb-PYtCltnvuk",
  authDomain: "proyecto-app-5fb20.firebaseapp.com",
  projectId: "proyecto-app-5fb20",
  storageBucket: "proyecto-app-5fb20.appspot.com",
  messagingSenderId: "869320105178",
  appId: "1:869320105178:web:073f5aa93e5d18eb3c99e3"
};

export const firebaseApp  =  initializeApp(firebaseConfig);