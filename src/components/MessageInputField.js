import * as React from 'react';
import {makeStyles} from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
})

const MessageInputField = ({name}) => {
  const classes= useStyles();
  return (
  <div className={classes.root}>
    <Grid container>
      <Grid xs={1}>アイコン</Grid>
      <Grid xs={10}>入力</Grid>
      <Grid xs={1}>ボタン</Grid>
    </Grid>
    </div>
  );
};

export default MessageInputField;