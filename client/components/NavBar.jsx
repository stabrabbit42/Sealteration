import React from 'react';
import { AppBar, TextField, Toolbar, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = (props) => {
  const { logIn } = props;

  // handle logout
  const handleLogout = () => {
    logIn(false);
  };

  return (
    <AppBar position="static" sx={{ width: '100%', color: 'secondary' }}>
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
          <div>Logo</div>
          <Button variant="outlined" size="small" style={{ color: 'white' }}>
            Home
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '30%' }}>
          <SearchIcon size="small" />
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
