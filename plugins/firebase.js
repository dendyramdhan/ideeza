import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyCs15QVVzKvAXvWIBiL17e_nqDUEkBUihw",
    authDomain: "ideeza-bd354.firebaseapp.com",
    databaseURL: "https://ideeza-bd354.firebaseio.com",
    projectId: "ideeza-bd354",
    storageBucket: "ideeza-bd354.appspot.com",
    messagingSenderId: "1094625585808",
    appId: "1:1094625585808:web:4087f4fa009459f4ac0615",
    measurementId: "G-BF50WL9L5E"
}

let app = null
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export const db = app.database()