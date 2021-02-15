import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBq7EyP9V4TYFmrXcq_psEpiN_pIxyQp4",
  authDomain: "cris-web-apps.firebaseapp.com",
  projectId: "cris-web-apps",
  storageBucket: "cris-web-apps.appspot.com",
  messagingSenderId: "358125981958",
  appId: "1:358125981958:web:1dd781a181ad9ab6e44e87",
  measurementId: "G-2V42S5DF45"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const storage = firebase.storage();
export const auth = firebase.auth();