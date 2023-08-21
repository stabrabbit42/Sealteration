import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
// import login
import Login from './components/Login.jsx';
// import main container
import MainContainer from './containers/MainContainer.jsx';
// import signup
import Signup from './components/Signup.jsx';
// need to store login state
// useState or redux

const App = () => {
  const [isLoggedIn, logIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup logIn={logIn}/>} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <MainContainer logIn={logIn} />
            ) : (
              <Login logIn={logIn} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

// export app
export default App;
