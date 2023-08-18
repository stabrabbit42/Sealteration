import React from "react";
// import userDetails
import UserDetails from '../components/UserDetails.jsx'
// import postContainer
import PostContainer from './PostContainer.jsx'

const UserContainer = () => {
  return (
    <div>
    <h3>User Container</h3>
    <UserDetails />
    <PostContainer />
    </div>
  )
}

// export
export default UserContainer