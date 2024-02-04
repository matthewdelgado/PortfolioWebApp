import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOau9RfW1l_iQKFhoPR9rEUsQ0SLDIF38",
  authDomain: "portfolio-57b66.firebaseapp.com",
  projectId: "portfolio-57b66",
  storageBucket: "portfolio-57b66.appspot.com",
  messagingSenderId: "708926429318",
  appId: "1:708926429318:web:7a2ffdd2a6850cec5b9907",
  measurementId: "G-XS6N7LXBGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
