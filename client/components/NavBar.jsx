import React from 'react';
import { AppBar, TextField, Toolbar, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = (props) => {
  const { logIn } = props;

  // handle logout
  const handleLogout = () => {
    logIn(false);
    fetch('/accounts/signout')
    .catch((err) => console.log(err));
  };

  return (
    <AppBar position="static" sx={{ width: '100%', color: 'white' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}
        >
          <i><div style={{color: 'white', 'font-family': 'Garamond, serif', 'font-size': '24px'}}>The Open Sea</div></i>
          <img src='https://cdn.discordapp.com/attachments/329284155156201472/1144356050737319966/jinbeemote.png' height = '50px' width='50px'></img>
          <Button variant="outlined" size="small" style={{ color: 'white' }}>
            Home
          </Button>
        </Box>
        <Box color='white' sx={{display: 'flex', alignItems: 'center', width: '30%', sx: {color: 'white'}}}>
          <SearchIcon size="small" style={{fill: 'white'}} />
          <TextField
            label="Search for users"
            variant="standard"
            size="small"
            sx={{
              flex: 1,
              m: 1,
              mb: 2.5,
              '& input': {
                color: 'white',
              },
            }}
          />
        </Box>
        <Button
          variant="outlined"
          size="small"
          style={{ color: 'white' }}
          onClick={() => handleLogout()}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
