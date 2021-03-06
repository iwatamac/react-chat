import * as React from 'react';
import {makeStyles} from '@mui/styles';

import RoomPage from './RoomPage';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const useStyles = makeStyles({
  root: { /* makeStylesのルールでrootが使われる */
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

const Main = ({name, roomName}) => {

  const classes = useStyles();
  return (
  <div className={classes.root}>
    <RoomPage roomName={roomName}/>
    <MessageList roomPage={roomName}/>
    <MessageInputField name={name} roomName={roomName} />
  </div>
  );
};

export default Main;