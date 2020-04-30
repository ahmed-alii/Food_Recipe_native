import React from "react";
//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWiTSzzp8p2MBSa0h2eMjJToZifsPV-bc",
  authDomain: "foodrecipesapp-6ee74.firebaseapp.com",
  databaseURL: "https://foodrecipesapp-6ee74.firebaseio.com",
  projectId: "foodrecipesapp-6ee74",
  storageBucket: "foodrecipesapp-6ee74.appspot.com",
  messagingSenderId: "951604081701",
  appId: "1:951604081701:web:54c6ef2f371731ebd43bcc",
  measurementId: "G-Q0EBVFKBE4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
