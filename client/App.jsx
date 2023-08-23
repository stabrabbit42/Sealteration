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

  const [profile, updateProfile] = useState({
    display_name: 'Nathan',
    interests: 'Coding',
    age: 18,
    location: 'Canada',
    education: 'None',
    job: 'None'
  });

  // UseEffect to check state of login on app startup
  // Needs to make a call to the backend to see if cookie is valid

  // send GET request to /accounts/ (contains a jwt cookie)
  // receives a {profile} key
  // if profile is undefined, logIn(false)
  // if profile exists, logIn(true)

  useEffect(() => {
    fetch('./accounts/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      if (response.ok) return response.json();
      else throw new Error('Failed to retrieve login data');
    })
    .then(response => {
      console.log(response);
      logIn(true);
      }
    )
    .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   updateProfile();
  // }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup logIn={logIn}/>} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <MainContainer logIn={logIn} profile={profile} />
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
