import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng',
  authDomain: 'lobby-c8f1f.firebaseapp.com',
  databaseURL: 'https://lobby-c8f1f.firebaseio.com',
  projectId: 'lobby-c8f1f',
  storageBucket: '',
  messagingSenderId: '91079693744',
  appId: '1:91079693744:web:7e3ccb27356d7e87',
};

firebase.initializeApp(firebaseConfig);
// let app = null;
// if (!firebase.apps.length) {
//   app = firebase.initializeApp(firebaseConfig);
// }
// const db = app.database();
