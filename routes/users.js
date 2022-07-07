var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.get('/user', function(req, res, next) {
  res.send('user');
});

module.exports = router;