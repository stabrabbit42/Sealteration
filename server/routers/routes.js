const express = require('express');

//middleware
const socialControllers = require('../controllers/socialControllers.js');
const router = express.Router();

router.post('/signup', socialControllers.signup, /*socialControllers.startSession,*/ (req, res) => {
  return res.status(200).json('Signup Successful');
  // const {id} = res.locals;
  // console.log(id);
    //return res.status(200).redirect(`/${id}`);
    // .redirect("/home");
});
router.post('/login', socialControllers.login, socialControllers.startSession, (req, res) => {
    const {id} = res.locals;
    return res.sendStatus(200);
    // return res.status(302).redirect(`GET /:${id}`);
});
//user's homepage has the ID of server info stored as type
router.get('/:id', socialControllers.isLoggedIn, socialControllers.pageDetails, (req, res) => {
  const {profile} = res.locals;
  return res.status(200).send(profile);
});

router.post('/:id/post', socialControllers.isLoggedIn, socialControllers.textpost, (req, res) => {
  const {content} = res.locals;
  return res.status(200).send(content);
})

module.exports = router;
