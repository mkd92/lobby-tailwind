import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng',
    authDomain: 'lobby-c8f1f.firebaseapp.com',
    databaseURL: 'https://lobby-c8f1f.firebaseio.com',
    projectId: 'lobby-c8f1f',
    storageBucket: 'lobby-c8f1f.appspot.com',
    messagingSenderId: '91079693744',
    appId: '1:91079693744:web:7e3ccb27356d7e87',
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({ timestampsInSnapshots: true });
}
const fireDb = firebase.firestore();
export default fireDb;
