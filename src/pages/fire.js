import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCmUeB_2AUvRJnf8WgZzVdHo6u-MnLcEcU",
    authDomain: "login-7fbae.firebaseapp.com",
    projectId: "login-7fbae",
    storageBucket: "login-7fbae.appspot.com",
    messagingSenderId: "1026181178656",
    appId: "1:1026181178656:web:cb8c9f8ef25390ffcd2345",
    measurementId: "G-LGSF8VF8HN"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);

  const db= fire.firestore();
  const auth=firebase.auth();
  const analytics = firebase.analytics();


  export {fire,db,auth, analytics};