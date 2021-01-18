import firebase from 'firebase';
import '@firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD7jHVb_ciG1b__RM_TseT0g9QJACOo3ik",
  authDomain: "booksanta-1ab91.firebaseapp.com",
  databaseURL: "https://booksanta-1ab91-default-rtdb.firebaseio.com",
  projectId: "booksanta-1ab91",
  storageBucket: "booksanta-1ab91.appspot.com",
  messagingSenderId: "760820663538",
  appId: "1:760820663538:web:2629a5df2ec603eedbbc6b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
