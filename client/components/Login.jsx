import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn } = props;
  // handle login function
  const handleLogin = () => {
    console.log(email, password);
    fetch('../accounts/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(() => console.log('here'))
      // modify state (in APP) to set isLoggedIn to true
      .then((response) => {
        console.log('response ok');
        logIn(true);
      })
      // errors
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="login">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          bgcolor: 'white',
          border: '1px solid lightgray',
          borderRadius: '10px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          height: '60%',
          width: '30%',
          p: 3,
        }}
      >
        <h1>Welcome!</h1>
        <TextField
          variant="outlined"
          label="Email"
          size="large"
          fullWidth="true"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Password"
          size="large"
          fullWidth="true"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          fullWidth="true"
          sx={{ textTransform: 'none' }}
          onClick={() => handleLogin()}
        >
          Sign in
        </Button>
        <Button
          variant="outlined"
          fullWidth="true"
          sx={{ textTransform: 'none' }}
        >
          Sign in with Google
        </Button>
        <p>
          New User? <RouterLink to="/signup">Create Account</RouterLink>
        </p>
      </Box>
    </div>
  );
};

export default Login;
