import * as React from 'react';
import { IconButton } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({inputEl, name, setText, text, roomName}) => {
  
  return (
    <IconButton 
    disabled={text === ''}
    onClick={() => {
      pushMessage({name,text,roomName});
      setText('');
      inputEl.current.focus();
    }}
    >
      <SendRoundedIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;