import {useState, useEffect} from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/* ＠material-uiが@muiに変わっているため、インストールが教材と違う。下のようにインストール
yarn add @mui/material @emotion/react @emotion/styled */


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link 
      color="inherit" 
      href="https://twitter.com/iwatamac"
      target="_blank"
      rel="noopener"
      >
        いわたま
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({setName, setRoomName}) {

  const [disabled, setDisabled] = useState(true);

  const [string, setString] = useState('');
  const [string2, setString2] = useState('');

  const [isComposed, setIsComposed] = useState(false);


  useEffect(() => {
    const disabled = (string === '') || (string2 === '')
    setDisabled(disabled)
  }, [string, string2]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="roomname"
              label="ルームネーム"
              name="roomname"
              autoFocus
              onChange={(e) => setString(e.target.value)}

              onKeyDown={(e) => {

                if (isComposed) return;
                
                if (e.key === 'Enter') {
                  setRoomName(e.target.value)
                  e.preventDefault();
                }
              }}
              onCompositionStart={() => setIsComposed(true)}
              onCompositionEnd={() => setIsComposed(false)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              onChange={(e) => setString2(e.target.value)}

              onKeyDown={(e) => {

                if (isComposed) return;
                
                if (e.key === 'Enter') {
                  setName(e.target.value)
                  e.preventDefault();
                }
              }}
              onCompositionStart={() => setIsComposed(true)}
              onCompositionEnd={() => setIsComposed(false)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={() => {
                setName(string) 
                setRoomName(string)
              }}
            >
              はじめる
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}