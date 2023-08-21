const db = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {};
const WORKFACTOR = 10;

// define userController methods


userController.signup = async (req, res, next) => {
  try {
    // assuming this is coming as a POST request to some subdomain
    // with {email, password} as JSON in the request body

    // assign variables to email and password
    const { email, password } = req.body;
    // TODO: add some validation/sanitization of email here
    // hash password with bcrypt
    password =  await bcrypt.hash(password, WORKFACTOR)

    // query to check if this email is already associated with a user
    const selectString = `SELECT email FROM user WHERE email = ${email};`;
    const selectResponse = await db.query(selectString);
    // if it is, maybe reroute to signup page with a 'this email already registered' message?
    if(selectResponse.rows.length === 0) {
      // TODO: render a 'this email already registered' message?
      return res.status(400).reroute('/accounts/signup');
    }
    // if not, create the account in the DB and pass the user to the account info screen?
      // later, add the session cookie
    else {
      // create the account in the DB
      const insertString = `INSERT INTO user (email, password) VALUES (${email}, ${password});`
      const insertResponse = await db.query(insertString);

      // add session JWT
      if(insertResponse) {
        // create JWT
        const token = jwt.sign({email: email}, process.env.authKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000
        });

        // set JWT cookie
        res.cookie('jwt', token, {
          maxAge: 1* 24 * 60 * 60,
          httpOnly: true
        });

        // TODO: where should this route the user? should this return next() or a full response?
        // return res.status(201).json(insertResponse);
        return next();
      }
      // if the DB insert failed, kick them back to the signup page
      else {
        return res.status(500).reroute('/accounts/signup');
      }
    }
  }
  catch (error) {
    return next({
      log: 'Error in userController.signup',
      status: 500,
      message: {err: 'An error occurred.'}
    });
  }
};

userController.login = async (req, res, next) => {
  try {
    // assuming this is coming as a POST request to some subdomain
    // with {email, password} as JSON in the request body

   // assign variables to email and password
   const { email, password } = req.body;
   // TODO: add some validation/sanitization of email here
   // hash password with bcrypt
   password =  await bcrypt.hash(password, WORKFACTOR)

    // query to check if this email-hash combo is correct
    const selectString = `SELECT email FROM user WHERE email = ${email} AND password = ${password};`;
    const selectResponse = await db.query(selectString);
    // if it is, reroute somewhere
    if(selectResponse.rows.length === 1) {
       // create JWT
       const token = jwt.sign({email: email}, process.env.authKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000
      });

      // set JWT cookie
      res.cookie('jwt', token, {
        maxAge: 1* 24 * 60 * 60,
        httpOnly: true
      });

      // TODO: where should this route the user? should this return next() or a full response?
      // return res.status(201).json(insertResponse);
      return next();
    }
    // if not, return an appropriate status code with "username or password is incorrect" message
    // or should this just reroute the user to the login page?
    else {
      return next({
        log: 'Error in userController.login. Username or password is incorrect',
        status: 401,
        message: {err: 'Username or password is incorrect'}
      });
      // TODO: render a 'this email already registered' message?
      // return res.status(400).reroute('/accounts/login');
    }
  }
  catch (error) {
    console.log(error);
    return next({
      log: 'Error in userController.login',
      status: 500,
      message: {err: 'An error occurred.'}
    });
  }
};

userController.logout = async (req, res, next) => {
  try {
    // delete the JWT cookie
    res.clearCookie('jwt');
    // TODO: reroute user to login screen? or return next()?
    return res.status(200).reroute('/accounts/login');
    // return next();
  }
  catch (error) {
    console.log(error);
    return next({
      log: 'Error in userController.logout',
      status: 500,
      message: {err: 'An error occurred.'}
    });
  }
};

module.exports = userController;