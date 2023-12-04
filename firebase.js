// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGwsUXC7QkvG2s_jrc_Vuyrpo8dPscl0",
  authDomain: "reactnativebackoffice-2a204.firebaseapp.com",
  projectId: "reactnativebackoffice-2a204",
  storageBucket: "reactnativebackoffice-2a204.appspot.com",
  messagingSenderId: "416052720925",
  appId: "1:416052720925:web:67e1e7bd95450f96ec5df4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth, app };