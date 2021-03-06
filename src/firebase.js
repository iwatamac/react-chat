/* import { initialize } from 'firebase'; */
import firebase from 'firebase/compat';
/* firebaseのverによってcompatを記載した */

const {
REACT_APP_FIREBASE_API_KEY,
REACT_APP_FIREBASE_AUTH_DOMAIN,
REACT_APP_FIREBASE_PROJECT_ID,
REACT_APP_FIREBASE_STORAGE_BUCKET,
REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
  };

 /* initialize(firebaseConfig); */
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export const roomsRef = database.ref('rooms')
  export const messagesRef = database.ref('messages')

  export const pushMessage = ({name, text, roomName}) => {
    messagesRef.push({name, text, roomName});
  };

  export const pushRoom = ({roomName}) => {
    roomsRef.push({roomName});
    /* pushするvalueがRef毎にかぶっていても別のRefに保存する事ができる */
  };