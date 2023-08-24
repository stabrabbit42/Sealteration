import React, { useState } from 'react';
import { Container, TextField, Input, Button, InputLabel } from '@mui/material';

const UserDetails = ({profile, updateProfile}) => {
  // const { display_name, age, location, job, education, interests } = props.data;
  // console.log('userProfile', profile);
  const [displayName, updateDisplayName] = useState('');
  const [age, updateAge] = useState('');
  const [location, updateLocation] = useState('');
  const [job, updateJob] = useState('');
  const [education, updateEducation] = useState('');
  const [interests, updateInterests] = useState('');
  // {updatedProfile: {display_name, interests, age, location, education, job}}

  async function sendNewProfile() {
    if (
      profile.display_name === displayName &&
      profile.age === age &&
      profile.location === location &&
      profile.job === job &&
      profile.education === education &&
      profile.interests === interests
    ) return;
    await updateProfile({
      display_name: displayName || profile.display_name,
      age: age || profile.age,
      location: location || profile.location,
      job: job || profile.job,
      education: education || profile.education,
      interests: interests || profile.interests,
    })
    console.log(`NEW PROFILE: ${JSON.stringify(profile)}`);
    fetch('./accounts/info', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({updatedProfile: {
        display_name: displayName || profile.display_name,
        interests: interests || profile.interests, 
        age: age || profile.age, 
        location: location || profile.location, 
        education: education || profile.education, 
        job: job || profile.job,}
      })
    })
    .catch(err => console.log(err));
    updateDisplayName('');
    updateInterests('');
    updateAge('');
    updateLocation('');
    updateEducation('');
    updateJob('');
  };

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
          height: 'auto',
          width: '100%',
          p: 3,
        }}
      >
        <div className="inputRow">
          {/* <h3 className="userDisplayName">Display Name: {profile.display_name}</h3> */}
          <InputLabel htmlFor="displayName" sx={{
            color: 'rgb(31 31 31)',
            fontSize: '24px',
          }}>{profile.display_name}</InputLabel>
          <Input
            placeholder="Change display name..."
            size="large"
            fullWidth
            value={displayName}
            onChange={(e) => updateDisplayName(e.target.value)}
          />
        </div>
        <ul className="userDetailsList">
        <li className="inputRow">
          <InputLabel htmlFor="age">Age: {profile.age}</InputLabel>
          <Input
            id="age"
            disableUnderline // This removes the input underline/border
            size="large"
            fullWidth
            value={age}
            onChange={(e) => updateAge(e.target.value)}
          />
        </li>
        <li className="inputRow">
          <InputLabel htmlFor="location">Location: {profile.location}</InputLabel>
          <Input
            id="location"
            disableUnderline // This removes the input underline/border
            size="large"
            fullWidth
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
          />
        </li> 
        <li className="inputRow">
          <InputLabel htmlFor="job">Job: {profile.job}</InputLabel>
          <Input
            id="job"
            disableUnderline // This removes the input underline/border
            size="large"
            fullWidth
            value={job}
            onChange={(e) => updateJob(e.target.value)}
          />
        </li>
        <li className="inputRow">
          <InputLabel htmlFor="education">Education: {profile.education}</InputLabel>
          <Input
            id="education"
            disableUnderline // This removes the input underline/border
            size="large"
            fullWidth
            value={education}
            onChange={(e) => updateEducation(e.target.value)}
          />
        </li>
        <li className="inputRow">
          <InputLabel htmlFor="interests">Interests: {profile.interests}</InputLabel>
          <Input
            id="interests"
            disableUnderline // This removes the input underline/border
            size="large"
            fullWidth
            value={interests}
            onChange={(e) => updateInterests(e.target.value)}
          />
        </li>
          
          <Button
            variant="contained"
            fullWidth={true}
            sx={{ textTransform: 'none' }}
            onClick={sendNewProfile} // Is this how we want this formatted?
            // Research how MUI sends this form data to handleSignup callback
          >
            Update Profile
          </Button>
        </ul>
      </Container>
    </div>
  );
};

export default UserDetails;
