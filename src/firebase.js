/* import { initialize } from 'firebase'; */
import firebase from 'firebase/compat';
/* firebaseのverによってcompatを記載した */

const firebaseConfig = {
    apiKey: "AIzaSyBvNzNEdtrlKviU3L4e2EF6vgIPwtLu1Nc",
    authDomain: "react-chat-8c714.firebaseapp.com",
    projectId: "react-chat-8c714",
    storageBucket: "react-chat-8c714.appspot.com",
    messagingSenderId: "52689947324",
    appId: "1:52689947324:web:125ea4ecd3dc882b395eb9"
  };

 /* initialize(firebaseConfig); */
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messagesRef = database.ref('messages')

  export const pushMessage = ({name, text}) => {
    messagesRef.push({name, text});
  };