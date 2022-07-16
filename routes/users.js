var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.get('/user', function(req, res, next) {
  res.render('user');
});

router.post('/user',function(req,res,next){
  let email= req.body.email;
  let password=req.body.password;

  console.log(email, password);
  res.render('users');
});

module.exports = router;
