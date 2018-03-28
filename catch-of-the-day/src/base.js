import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAJaVmOdNOcyjAmfdxihcMEFu5Bj5BPnVQ',
  authDomain: 'catch-of-the-day-casy.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-casy.firebaseio.com'
  // projectId: 'catch-of-the-day-casy',
  // storageBucket: 'catch-of-the-day-casy.appspot.com',
  // messagingSenderId: '1082101404255'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
