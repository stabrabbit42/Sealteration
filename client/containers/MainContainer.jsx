import React, {useEffect, useState} from "react";
// import navbar
import NavBar from '../components/NavBar.jsx'
// import usercontainer
import UserContainer from './UserContainer.jsx'

const MainContainer = ({profile, logIn, updateProfile}) => {
  
  // fetch('./accounts/info', {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({updatedProfile: {
  //     display_name: profile.display_name, 
  //     interests: profile.interests, 
  //     age: profile.age, 
  //     location: profile.location, 
  //     education: profile.education, 
  //     job: profile.job}
  //   })
  // })
  // .catch(err => console.log(err));

  // {updatedProfile: {display_name, interests, age, location, education, job}}

  return (
    <div id="mainContainer">
      <NavBar logIn={logIn}/>
      <UserContainer profile={profile} updateProfile={updateProfile}/>
    </div>
  )
}

// export
export default MainContainer