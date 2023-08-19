const db = require('../db/database');

const socialControllers = {};

socialControllers.signup = async (req, res, next) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM public.users WHERE email = '${email}'`;
  try {
    const result = await db.query(query);

    if (result.rows.length > 0) {
      
    }
    const insertQuery = `INSERT INTO public.users (email, password) VALUES ('${email}', '${password}') RETURNING user_id`;
  }

}
    //query database to see if email exists
        //if not, create a new user in DB
         //if so, redirect them to login authenticate; set cookies

socialControllers.login = async (req, res, next) => {
//query for user and password, authenticate;
const { email, password } = req.body;
const query = `SELECT s.email, s.password FROM public.users s WHERE s.email=${email} s.password=${password}`
try{
    const user=await db.query(query);
    if (user.length===0){
        //redirect to signup
    }
    
}
}


socialControllers.startSession = async (req, res, next) => {
//set cookies
try{
    const {userId} = res.locals
    await res.cookie("ssid", userId);
    return next();
}catch (err)
    return next({
    log: `An error occured in setSSIDCookie ${err}`,
    status: 500
    message: { err: "internal server error" },
    });
}


socialControllers.isLoggedIn = async (req, res, next) => {}
//check for cookies

socialControllers.pageDetails = async (req, res, next) => {}
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
