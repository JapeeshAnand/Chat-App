import firebase from 'firebase/app'
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAksltPLJ1pQRfCqgXN81JWGV_hHyyBDmQ",
    authDomain: "chat-app-13875.firebaseapp.com",
    projectId: "chat-app-13875",
    storageBucket: "chat-app-13875.appspot.com",
    messagingSenderId: "576318110550",
    appId: "1:576318110550:web:d436149adda56e8a6174f7"
}).auth();