import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC6uYbBtv08hgqctxplytP6v5gMb1rI-gk",
    authDomain: "usersapp-d57c6.firebaseapp.com",
    databaseURL: "https://usersapp-d57c6.firebaseio.com",
    projectId: "usersapp-d57c6",
    storageBucket: "usersapp-d57c6.appspot.com",
    messagingSenderId: "316245774174",
    appId: "1:316245774174:web:4ed022c54108a6fccdc9cf"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;