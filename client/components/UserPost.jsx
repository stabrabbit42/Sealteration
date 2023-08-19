import React from 'react';
import { Container } from '@mui/material';

const UserPost = (props) => {
  const { title, content } = props;

  // potential other features that might need this to be changed to a box include: comments and likes

  return (
    <div id='post'>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          gap: 4,
          bgcolor: 'white',
          border: '1px solid lightgray',
          borderRadius: '10px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          height: '60%',
          width: '60%',
          p: 3,
        }}
      >
        <h2> {title} </h2>
        <div id='content'>{content}</div>
      </Container>
    </div>
  );
};

export default UserPost;
