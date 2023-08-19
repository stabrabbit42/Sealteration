import React from 'react';
import { Box, TextField, Button, Link } from '@mui/material';

// handle login function
/*
const handleLogin = () => {
  // fetch request to backend 
    // pass user and password
    // if response.ok 
      // modify login state --->> this will redirect (react-router on App component) from the login page to main container 
    // else 
      // display error logging in message using conditional rendering
}
 */
const Login = (props) => {
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
          label="Username"
          size="large"
          fullWidth="true"
        ></TextField>
        <TextField
          variant="outlined"
          label="Password"
          size="large"
          fullWidth="true"
          type="password"
        ></TextField>
        <Button
          variant="contained"
          fullWidth="true"
          sx={{ textTransform: 'none' }}
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
          New User? <Link href="x">Create Account</Link>
        </p>
      </Box>
    </div>
  );
};

export default Login;
