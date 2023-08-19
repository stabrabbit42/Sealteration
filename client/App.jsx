import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
// import login
import Login from './components/Login.jsx';
// import main container
import MainContainer from './containers/MainContainer.jsx';
// need to store login state
// useState or redux

const App = () => {
  const [isLoggedIn, logIn] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <MainContainer logIn={logIn}/> : <Login logIn={logIn} />}
        />
        {/* <MainContainer /> */}
      </Routes>
    </BrowserRouter>
  );
};

// export app
export default App;
