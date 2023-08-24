import React from "react";
// import userDetails
import UserDetails from '../components/UserDetails.jsx'
// import postContainer
import PostContainer from './PostContainer.jsx'

const UserContainer = ({profile, updateProfile}) => {

  return (
    <div id="userContainer">
    <UserDetails profile = {profile} updateProfile={updateProfile}/>
    <PostContainer />
    </div>
  )
}

// export
export default UserContainer