import * as React from 'react';
import {makeStyles} from '@mui/styles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';
import { useState,useRef } from 'react';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
})

const MessageInputField = ({name}) => {
  const inputEl = useRef(null);
  const [text, setText] = useState('');
  const classes= useStyles();
  const avatarPath = gravatarPath(name);

  return (
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={1}>
        <Avatar src={avatarPath} />
      </Grid>
      <Grid item xs={10}>
        <MessageField 
        inputEl={inputEl}
        name={name} setText={setText} text={text} />
      </Grid>
      <Grid item xs={1}>
        <MessageSubmitButton 
        inputEl={inputEl}
        name={name} setText={setText} text={text} />
      </Grid>
    </Grid>
    </div>
  );
};

export default MessageInputField;