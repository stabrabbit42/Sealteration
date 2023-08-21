const express = require('express');
//middleware
const socialControllers = require('../controllers/socialControllers.js');
const router = express.Router();

router.post('/signup', socialControllers.signup, (req, res) => {
    console.log('in router, after signup')
    return res.status(200);
    // .redirect("/home"); 
});
router.post('/login', socialControllers.login, socialControllers.startSession, (req, res) => {
    return res.status(302).redirect("/home"); 
});
//user's homepage has the ID of server info stored as type
router.post('/:id', (req, res) => {
  //need to hash ID for this
});

router.post('/', (req, res) => {
  
});

module.exports = router;
