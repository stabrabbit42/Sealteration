import React from "react";

// import userPosts
import UserPost from '../components/UserPost.jsx';

const PostContainer = ({content, updateContent}) => {

  const userPosts = [];

  for (let i = content.length - 1; i > 0 && i > content.length - 6; i--) {
    userPosts.push(<UserPost inheritedLikes = {content[i].likes} userId = {content[i].user_id} text = {content[i].content} displayName = {content[i].display_name} postId = {content[i].post_id}/>)
  }

  return (
    <div id="postContainer">
      {userPosts}
    </div>
  )
}

// export
export default PostContainer