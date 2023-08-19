import React from "react";

// import login
import Login from './components/Login.jsx'
// import main container
import MainContainer from './containers/MainContainer.jsx'
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Login />
      <MainContainer />
    </div>
  )
}


// export app
export default App;