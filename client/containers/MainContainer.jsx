import React from "react";
// import navbar
import NavBar from '../components/NavBar.jsx'
// import usercontainer
import UserContainer from './UserContainer.jsx'

const MainContainer = () => {
  return (
    <div>
      <h2>Main Container</h2>
      <NavBar />
      <UserContainer />
    </div>
  )
}

// export
export default MainContainer