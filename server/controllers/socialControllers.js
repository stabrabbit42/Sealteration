const db = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const WORKFACTOR = 10;
const socialControllers = {};

// signup middleware
socialControllers.signup = async (req, res, next) => {
  const { email, password } = req.body;
  password =  await bcrypt.hash(password, WORKFACTOR)
  try {
    const query = `SELECT * FROM public.users WHERE email = '${email}'`;
    const result = await db.query(query);
    
    if (result.rows.length > 0) {
      return next({
        log: 'An error occurred signing up with existing email',
        status: 400,
        message: { err: 'Email already exists' }
      })
    }

    const insertQuery = `INSERT INTO public.users (email, password) VALUES ('${email}', '${password}') RETURNING user_id`;
    const insertedUser = await db.query(insertQuery);
    let id= insertedUser.rows[0].user_id;
    id =  await bcrypt.hash(id, WORKFACTOR)
    const idQuery = `INSERT INTO public.users (hash_id) VALUES ('${id}') RETURNING hash_id`;
    const idInsert = await db.query(insertQuery);
    res.locals.id=id;
    return next();
  } catch(error) {
    return next({
      log: 'An error occurred signing up',
      status: 500,
      message: { err: 'Internal server error' }
    })
  }
}

socialControllers.textpost = async (req, res, next) => {
  const {email} = res.locals;
  const { content } = req.body;
  try {
    //check if req.query.id is ==hash id and email==email of the same user
    //then post if it is
    const query = `SELECT s.email, s.hash_id FROM public.users s WHERE s.email=${email} s.hash_id=${req.params.id} RETURNING user_id`
    const user = await db.query(query);
    if (user.rows.length === 0){
      return next({
        log: 'Invalid Username or Password',
        status: 401,
        message: { err: 'Invalid Username or Password' }
      })
    } else {
      // INSERT this new post into the DB
    const userID=user.rows[0].user_id;
    const insertQuery = `INSERT INTO public.textPost (user_id, content) VALUES ('${userID}', '${content}')`;
    const insertContent = await db.query(insertQuery);
      // SELECT all of this user's posts
    const contentAll = `SELECT * FROM public.textPost WHERE user_id ='${userID}'`;
    const allPosts = await db.query(contentAll);
      // store the posts on res.locals.content and go to next
    res.locals.content=allPosts.rows;
    return next();
    }
  } catch(error) {
    return next({
      log: 'An error occurred while posting content',
      status: 500,
      message: { err: 'Internal server error - unable to post content' }
    })
  }
}


socialControllers.login = async (req, res, next) => {
//query for user and password, authenticate;
const { email, password } = req.body;
//hash and check
password =  await bcrypt.hash(password, WORKFACTOR);
const query = `SELECT s.email, s.password FROM public.users s WHERE s.email=${email} s.password=${password} RETURNING hash_id`
try{
    const user = await db.query(query);

    if (user.rows.length === 0){

      return next({
        log: 'Invalid Username or Password',
        status: 401,
        message: { err: 'Invalid Username or Password' }
      })

    } else {
      
      // const hashedPasswordMatch = await bcrypt.compare(password, user.rows[0]);
      
      // if (!hashedPasswordMatch) {

      //   return next({
      //     log: 'Invalid Username or Password',
      //     status: 401,
      //     message: {err: 'Invalid Username or Password'}
      //   })

      // }
      
      res.locals.id = user.rows[0].hash_id;
      return next();
    }
    
  } catch (error) {
    return next({
      log: 'An error occurred while logging in',
      status: 500,
      message: { err: 'An error occured while logging in'}
    })
  }
}


socialControllers.startSession = async (req, res, next) => {
//set cookies
try {

  const token = jwt.sign({email: email}, process.env.authKey, {
    expiresIn: 1 * 24 * 60 * 60 * 1000
  });

  const {userId} = res.locals;

  await res.cookie("jwt", token, {
    maxAge: 1* 24 * 60 * 60,
    httpOnly: true
  });
  return next();
} catch (err){
    return next({
    log: `An error occured in setSSIDCookie ${err}`,
    status: 500,
    message: { err: "internal server error" },
    });
}
}


socialControllers.isLoggedIn = async (req, res, next) => {
  // check if req.cookies includes 'jwt'
 try {
    const payload = await jwt.verify(req.cookies.jwt, process.env.authKey);
    // query DB to see if email exists there
    const query = `SELECT email FROM public.users WHERE email = '${payload.email}'`;
    const result = await db.query(query);
    // if the email in the JWT payload is not in our DB, throw an error
    if (result.rows.length === 0){
      return next({
        log: 'Error in socialControllers.isLoggedIn. JWT is not valid',
        status: 401,
        message: { err: 'Username is not valid' }
      });
    }
    // if the email in the JWT payload is in our DB, store the email in res.locals and return next
      res.locals.email = payload.email;
      return next();
 }
 catch (error) {
  return next({
    log: 'Error in socialControllers.isLoggedIn. JWT is not valid',
    status: 401,
    message: { err: 'Username is not valid' }
  });
 }
}

socialControllers.pageDetails = async (req, res, next) => {
  try {
    const query = `SELECT * FROM public.users WHERE hash_id = '${req.params.id}'`;
    const result = await db.query(query);
    const profile=result.rows[0]
    res.locals.profile=profile
    return next();
  } catch (error){
  return next({
  log: 'Error fetching page details',
  status: 500,
  message: {err: 'error while fetching user details.'}
  });
}
}


socialControllers.logout = async (req, res, next) => {
  try {
    // delete the JWT cookie
    res.clearCookie('jwt');
    // TODO: reroute user to login screen? or return next()?
    return res.status(200).reroute('/accounts/login');
    // return next();
  }
  catch (error) {
    return next({
      log: 'Error in userController.logout',
      status: 500,
      message: {err: 'An error occurred.'}
    });
  }
};


module.exports = socialControllers;
