import React from 'react';
import { Container, Divider } from '@mui/material';

const UserPost = ({text, userId}) => {
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
          margin: '0',
        }}
      >
        <h3>{userId}</h3>
        <Divider /> 
        <div id='content'>{text}</div>
      </Container>
    </div>
  );
};

export default UserPost;
