import React, {useState} from 'react';
import './App.css';
import SignIn from './SignIn';

export default () => {
  const [name, setName] = useState('');

  return <SignIn setName={setName} />;
  /* SignInにsetNameを渡す */
};
