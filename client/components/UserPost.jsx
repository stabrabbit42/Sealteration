import React, {useEffect, useState} from 'react';
import { Container, Divider, Button } from '@mui/material';

const UserPost = ({text, postId, displayName, inheritedLikes}) => {
  // const { title, content } = props;
  const [likes, updateLikes] = useState(0)

  useEffect(() => {
    updateLikes(inheritedLikes);
  }, []);
  
  const like = () => {
    console.log(postId);
    fetch('/accounts/like', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        postId: postId
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(response => updateLikes(response))
    .catch(err => console.log(err));
  }
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
        <h3>{displayName}</h3>
        <Divider /> 
        <div id='content'>{text}</div>
         <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          sx={{ textTransform: 'none', width: '25%', marginLeft: 'auto'  }}
          onClick={like} // Disable the button if no content
          >
         {likes}  Likes
        </Button>
      </Container>
    </div>
  );
};

export default UserPost;
