import React from "react";
// import userDetails
import UserDetails from '../components/UserDetails.jsx'
// import postContainer
import PostContainer from './PostContainer.jsx'

const UserContainer = () => {
  return (
    <div id="userContainer">
    <UserDetails />
    <PostContainer />
    </div>
  )
}

// export
export default UserContainer