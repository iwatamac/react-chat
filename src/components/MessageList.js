import * as React from 'react';
import {makeStyles} from '@mui/styles';
import { useState, useEffect } from 'react';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  }
});

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        const nameAndText = entry[1]
        return {key, ...nameAndText};
        });
        setMessages(newMessages);
      });
  },[]);
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;