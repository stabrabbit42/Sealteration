import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import login
import Login from './components/Login.jsx';
// import main container
import MainContainer from './containers/MainContainer.jsx';
// need to store login state
// useState or redux
const isLoggedIn = false;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <MainContainer /> : <Login />} />
        {/* <MainContainer /> */}
      </Routes>
    </BrowserRouter>
  );
};

// export app
export default App;
