const db = require('../db/database');

const socialControllers = {};

// signup middleware
socialControllers.signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const query = `SELECT * FROM public.users WHERE email = '${email}'`;
    const result = await db.query(query);
    if (result.rows.length > 0) {
      console.log('same profile name');
      return next({
        log: 'An error occurred signing up with existing email',
        status: 400,
        message: { err: 'Email already exists' },
      });
    }
    const insertQuery = `INSERT INTO public.users (email, password) VALUES ('${email}', '${password}') RETURNING user_id`;
    const insertedUser = await db.query(insertQuery);
    console.log('user_id: ', insertedUser.rows[0]);
    res.locals.userId = insertedUser.rows[0];
    return next();
  } catch (error) {
    return next({
      log: 'An error occurred signing up',
      status: 500,
      message: { err: 'Internal server error' },
    });
  }
};
//query database to see if email exists
//if not, create a new user in DB
//if so, redirect them to login authenticate; set cookies

socialControllers.login = async (req, res, next) => {
  console.log('inside login middleware');
  //query for user and password, authenticate;
  const { email, password } = req.body;
  const query = `SELECT s.email, s.password FROM public.users s WHERE s.email='${email}' AND s.password='${password}'`;
  try {
    const user = await db.query(query);
    if (user.rows.length === 0) {
      return next({
        log: 'Invalid Username or Password',
        status: 401,
        message: { err: 'Invalid Username or Password' },
      });
    } else {
      res.locals.userId = user.rows[0];
      console.log('successfully logged in');
      next();
    }
  } catch(err) {
    console.log('inside catch')
    console.log(err)
  }
};

socialControllers.startSession = async (req, res, next) => {
  //set cookies
  try {
    const { userId } = res.locals;
    await res.cookie('ssid', userId);
    return next();
  } catch (err) {
    return next({
      log: `An error occured in setSSIDCookie ${err}`,
      status: 500,
      message: { err: 'internal server error' },
    });
  }
};

socialControllers.isLoggedIn = async (req, res, next) => {};
//check for cookies

socialControllers.pageDetails = async (req, res, next) => {};
//gets all details from user card to populate homepage
//also gets called when navigating to another user's page

// starWarsController.getCharacters = async (req, res, next) => {
//   // write code here

//   // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//   //res.locals.characters = [];
//   const query = `SELECT p.*, s.name AS species, pl.name AS homeworld
//   FROM public.people p
//   JOIN public.species s
//   ON p._id = s._id
//   JOIN public.planets pl
//   ON p.homeworld_id = pl._id`;
//   //  JOIN public.people_in_films pf ON p._id = pf.person_id
//   //JOIN films f ON pf.film_id = f._id;
//   try {
//     const characters = await db.query(query);
//     res.locals.characters = characters.rows;
//     return next();
//   } catch {
//     const newErr = {
//       log: 'error fetching characters',
//       status: 500,
//       message: {
//         err: 'error with middleware fetch',
//       },
//     };
//     return next(newErr);
//   }
// };

module.exports = socialControllers;
