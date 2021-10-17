import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { pushMessage } from '../firebase';

const MessageField = ({name, setText, text}) => {
  const [isComposed, setIsComposed] = useState(false);

  return <TextField 
  variant="standard"
  fullWidth={true}
  onChange={(e) => {
    setText(e.target.value);
  }} 
  onKeyDown={(e) => {

    if (isComposed) return;

    const text = e.target.value;
    if (text === '') return;

    if (e.key === 'Enter') {
      pushMessage({name:'iwama', text});
      setText('');
      e.preventDefault();
    }
  }}
  onCompositionStart={() => setIsComposed(true)}
  onCompositionEnd={() => setIsComposed(false)}
  value={text}
  />
};

export default MessageField;