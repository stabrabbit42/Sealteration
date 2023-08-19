import React from 'react';
import { Container } from '@mui/material';

const UserDetails = (props) => {
  // const { display_name, age, location, job, education, interests } = props.data;

  return (
    <div id="user">
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
        <div className="userHeadContainer">
          <h3 className="userDisplayName">Display Name: </h3>
        </div>
        <ul className="userDetailsList">
          <li className="userDetail">Age: </li>
          <li className="userDetail">Location: </li>
          <li className="userDetail">Job: </li>
          <li className="userDetail">Education: </li>
          <li className="userDetail">Interests: </li>
        </ul>
      </Container>
    </div>
  );
};

export default UserDetails;
