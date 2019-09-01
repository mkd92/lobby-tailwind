import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng",
    authDomain: "lobby-c8f1f.firebaseapp.com",
    databaseURL: "https://lobby-c8f1f.firebaseio.com",
    projectId: "lobby-c8f1f",
    storageBucket: "",
    messagingSenderId: "91079693744",
    appId: "1:91079693744:web:7e3ccb27356d7e87"
  };

  !firebase.apps.length ? firebase.initializeApp(config) : ''
  export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = firebase.auth()
  export const DB = firebase.database()
  export const StoreDB = firebase.firestore()
  export default firebase