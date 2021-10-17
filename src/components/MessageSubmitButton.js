import * as React from 'react';
import { IconButton } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({name, setText, text}) => {
  return (
    <IconButton 
    disabled={text === ''}
    onClick={() => {
      pushMessage({name: 'iwama',text});
      setText('');
    }}
    >
      <SendRoundedIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;