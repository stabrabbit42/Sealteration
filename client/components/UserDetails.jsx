import React from 'react';
import { Container } from '@mui/material';

const UserDetails = (props) => {
  // const { display_name, age, location, job, education, interests } = props.data;
  const { profile } = props;
  console.log('userProfile', profile);

  // {updatedProfile: {display_name, interests, age, location, education, job}}

  return (
    <div id="userDetails">
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
          height: '80%',
          width: '100%',
          p: 3,
        }}
      >
        <div className="userHeadContainer">
          <h3 className="userDisplayName">Display Name: {profile.display_name}</h3>
        </div>
        <ul className="userDetailsList">
          <li className="userDetail">Age: {profile.age} </li>
          <li className="userDetail">Location: {profile.location}</li>
          <li className="userDetail">Job: {profile.job} </li>
          <li className="userDetail">Education: {profile.education} </li>
          <li className="userDetail">Interests: {profile.interests} </li>
        </ul>
      </Container>
    </div>
  );
};

export default UserDetails;
