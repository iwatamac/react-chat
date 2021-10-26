import * as React from 'react';
import {List, ListItem} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { useState, useEffect } from 'react';
import MessageItem from './MessageItem';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList = ({roomPage}) => {
  const [messages, setMessages] = useState([])
  const classes = useStyles();
  const currentRoom = {roomPage}
  
  
  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(15)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages); 
        const newMessages = entries.map((entry) => {
        const [key, nameAndTextAndRoom] = entry;
        return {key, ...nameAndTextAndRoom};
        });
        setMessages(newMessages);
      });
  },[]);

  const length = messages.length;

  
  
  return (

    <List className={classes.root}>
    {messages.map(({key,name,text,roomName}, index ) => {
      const isLastItem = length === index + 1;
      const roomId = {roomName}      
     
      if (currentRoom === roomId) {
      return (
        <MessageItem 
        key={key}
        name={name} 
        text={text} 
        isLastItem={isLastItem} 
        roomName={roomName}
        />
        );
}
else {
  return;
}})}
  </List>
  )};

export default MessageList;