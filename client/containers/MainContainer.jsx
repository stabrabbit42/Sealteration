import React from "react";
// import navbar
import NavBar from '../components/NavBar.jsx'
// import usercontainer
import UserContainer from './UserContainer.jsx'

const MainContainer = (props) => {
  const { logIn } = props;
  return (
    <div id="mainContainer">
      <NavBar logIn={logIn}/>
      <UserContainer />
    </div>
  )
}

// export
export default MainContainer