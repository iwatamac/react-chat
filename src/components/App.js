import React, {useState} from 'react';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';
import config from '../config.json'

export default () => {
  const [name, setName] = useState('');
  const [roomName, setRoomName] = useState('');

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} roomName={roomName} setRoomName={setRoomName} />;
    /* たくさん他のコンポーネントに渡すならApp.jsに関数定義する方が無難。
    Refで登録するものはそもそもここで渡ってないと意味がない */
  } else {
    return <Main name={name} roomName={roomName}/>;
    }
};