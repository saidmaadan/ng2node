var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
  res.render('index');
});

// router.post('/', function(req, res, next){
//   var email = req.body.email;
//   var user = new User({
//     firstName: "Said",
//     lastName: "Maadan",
//     password: "secret123",
//     email: email
//   });
//   user.save();
//   res.redirect('/');
// })

module.exports = router;
