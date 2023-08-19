const express = require('express');
//middleware
const socialControllers = require('../controllers/socialControllers.js');
const router = express.Router();

router.post('/signup', socialControllers.signup, (req, res) => {

});
router.post('/login', socialControllers.login, (req, res) => {

});
//user's homepage has the ID of server info stored as type
router.post('/:id', (req, res) => {
  
});

module.exports = router;
