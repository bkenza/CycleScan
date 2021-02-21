import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'cyclescan.firebaseapp.com',
    // databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'cyclescan',
    storageBucket: 'cyclescan.appspot.com',
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth; // authentication
export const db = firebase.database(); // database
