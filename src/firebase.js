import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDh-BoLHhyCiWz-bAEJLvQ29-ZgFw1OmQ",
    authDomain: "to-do-app-cp-5140d.firebaseapp.com",
    databaseURL: "https://to-do-app-cp-5140d.firebaseio.com",
    projectId: "to-do-app-cp-5140d",
    storageBucket: "to-do-app-cp-5140d.appspot.com",
    messagingSenderId: "880658822131",
    appId: "1:880658822131:web:fbbb40ee933697ee795886",
    measurementId: "G-5QECTDPWYM"
});

const db = firebaseApp.firestore();

export default db;