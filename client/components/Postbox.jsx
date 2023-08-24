import React, {useState} from 'react';
import { Container, TextField, Button} from '@mui/material';

const Postbox = ({updateContent}) => {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = (e) =>{
    e.preventDefault();
    console.log('Post content', postContent);
    fetch('./accounts/post',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          content: postContent
        })
    })
    .then((response)=>{
      if(response.ok){
        return response.json()
      }
    })
    .then(response => {
      console.log(response);
      updateContent(response);
    })
    .catch((err)=>{
        console.log(err);
    })

    setPostContent('');
  }

  return (
      <div id="postbox">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
        
            alignItems: 'left',
            bgcolor: 'white',
            border: '1px solid lightgray',
            borderRadius: '10px',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            height: 'auto',
            width: '100%',
            p: 3,
          }}
        >
        <TextField
          multiline
          rows={4}
          variant="outlined"
          label="Write your post"
          fullWidth = {true}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          sx={{ textTransform: 'none' }}
          onClick={handlePostSubmit}
          disabled={!postContent} // Disable the button if no content
          >
          Submit Post
        </Button>
      </Container>
      </div>
    );
};

export default Postbox;