import React from 'react';
import { Container } from '@mui/material';

const UserDetails = (props) => {
  const { display_name, age, location, job, education, interests } = props.data;

  return (
    <div id='user'>
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
          height: '30%',
          width: '30%',
          p: 3,
        }}
      >
        <div className='userHeadContainer'>
          <h3 className='userDisplayName'>{display_name}</h3>
        </div>
        <ul className='userDetailsList'>
          <li className='userDetail'>Age: {age}</li>
          <li className='userDetail'>Location: {location}</li>
          <li className='userDetail'>Job: {job}</li>
          <li className='userDetail'>Education: {education}</li>
          <li className='userDetail'>Interests: {interests}</li>
        </ul>
      </Container>
    </div>
  );
};

export default UserDetails;
