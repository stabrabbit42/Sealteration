import React from "react";

// import userPosts
import UserPost from '../components/UserPost.jsx';

const PostContainer = () => {
  return (
    <div id="postContainer">
      <UserPost />
      <UserPost />
      <UserPost />
    </div>
  )
}

// export
export default PostContainer