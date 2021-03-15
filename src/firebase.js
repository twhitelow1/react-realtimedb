import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4fI08LoxaT9bl4j_EjL9OKNPLKujBIBw",
  authDomain: "react-firebase-e87ca.firebaseapp.com",
  databaseURL: "https://react-firebase-e87ca-default-rtdb.firebaseio.com",
  projectId: "react-firebase-e87ca",
  storageBucket: "react-firebase-e87ca.appspot.com",
  messagingSenderId: "196290404390",
  appId: "1:196290404390:web:48504fe6dac45df326c6e7"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();