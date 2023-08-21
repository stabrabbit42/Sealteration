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
        message: { err: 'Email already exists' },
      });
    }

    const insertQuery = `INSERT INTO public.users (email, password) VALUES ('${email}', '${password}') RETURNING user_id`;
    const insertedUser = await db.query(insertQuery);
    return next();
  } catch (error) {
    return next({
      log: 'An error occurred signing up',
      status: 500,
      message: { err: 'Internal server error' },
    });
  }
};

socialControllers.startSession = async (req, res, next) => {
    return next({
      log: `An error occured in setSSIDCookie ${err}`,
      status: 500,
      message: { err: 'internal server error' },
    });
  }
};


module.exports = socialControllers;
