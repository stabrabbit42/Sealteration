import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = ({logIn}) => {
  const navigate = useNavigate();

  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const [signupError, updateSignupError] = useState('');

  // handle signUp function
  const handleSignup = (e) => {
    e.preventDefault();
    fetch('./accounts/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      // modify state (in APP) to set isLoggedIn to true and navigate to home page
      .then((response) => {
        if (response.ok) {
          console.log(response.body);
          logIn(false); // If you want immediate login on signup, change to true
          navigate('/');
        } else {
          updateSignupError('That email address is already registered!');
        }
      })
      // errors
      .catch((err) => {
        console.log(err);
      });
  };

  let signupErrorMessage;

  if (signupError) {
    signupErrorMessage = 
      <Box
        sx={{
          color: 'rgb(255, 63, 63)',
          width: '100%',
          borderRadius: '10px',
          textAlign: 'center'
        }}
      >
        <p>{signupError}</p>
      </Box>
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
          height: 'auto',
          width: '30%',
          p: 3,
        }}
      >
        <h1>Welcome!</h1>
        <TextField
          variant="outlined"
          label="Email"
          size="large"
          fullWidth={true}
          onChange={(e) => updateEmail(e.target.value)}
        ></TextField>
        {signupErrorMessage}
        <TextField
          variant="outlined"
          label="Password"
          size="large"
          fullWidth={true}
          type="password"
          onChange={(e) => updatePassword(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          fullWidth={true}
          sx={{ textTransform: 'none' }}
          onClick={handleSignup} // Is this how we want this formatted?
          // Research how MUI sends this form data to handleSignup callback
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default Signup;