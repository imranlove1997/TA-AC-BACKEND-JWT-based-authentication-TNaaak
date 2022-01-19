var express = require('express');
var User = require('../models/user');
var router = express.Router();

var auth = require('../middlewares/auth');

/* GET users listing. */
router.get('/', auth.verifyToken,(req, res, next) => {
  res.json({ welcome: 'Hello' });
})

router.post('/register', async (req, res, next) => {
  try {
  var user = await User.create(req.body);
  var token = await user.tokenSign();
  res.status(201).json({ user: user.tokenValidate(token) });   
  } catch (error) {
    next(error);
  }
})

router.post('/login', async (req, res, next) => {
  var {email , password } = req.body;
    if(!email || !password ) {
      return res.status(400).json({ error: "Email/Password Required" });
    }
  try {
    var user = User.findOne({ email });
    if(!user) {
      return res.status(400).json({ error: "User is not registered" });
    }
    var result = await user.verifyPassword(password);
    if(!result) {
      return res.status(400).json({ error: "Password is incorrect" });
    }
    var token = await user.tokenSign();
    res.json({ user: user.tokenValidate(token) });
  } catch (error) {
    next(error);
  }
})

module.exports = router;
