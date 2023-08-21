import React from 'react';
import { Container } from '@mui/material';

const UserPost = (props) => {
  // const { title, content } = props;

  // potential other features that might need this to be changed to a box include: comments and likes

  return (
    <div id='post'>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'left',
          bgcolor: 'white',
          border: '1px solid lightgray',
          borderRadius: '10px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          height: '100%',
          width: '100%',
          p: 2,
        }}
      >
        <h2> Title </h2>
        <div id='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam maecenas. Cursus sit amet dictum sit amet justo. Elit pellentesque habitant morbi tristique senectus et netus.</div>
      </Container>
    </div>
  );
};

export default UserPost;
