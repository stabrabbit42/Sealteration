import React from "react";
// import userDetails
import UserDetails from '../components/UserDetails.jsx'
// import postContainer
import PostContainer from './PostContainer.jsx'
import Postbox from '../components/Postbox.jsx'

const UserContainer = ({profile, updateProfile, content, updateContent}) => {

  return (
    <div id="userContainer">
    <UserDetails profile={profile} updateProfile={updateProfile}/>
    <PostContainer content={content}/>
    <Postbox updateContent={updateContent} profile={profile}/>
    </div>
  )
}

// export
export default UserContainer