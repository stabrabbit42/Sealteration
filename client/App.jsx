import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  // UseEffect to check state of login on app startup
  // Needs to make a call to the backend to see if cookie is valid

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
