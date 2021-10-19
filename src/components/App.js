import React, {useState} from 'react';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';
import config from '../config.json'

export default () => {
  const [name, setName] = useState('');

  const [roomName, setRoomName] = useState('');
  

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} setRoomName={setRoomName}/>;
  } else {
    return <Main name={name} />;
    }
};