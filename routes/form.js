var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.get('/form2', function(req, res, next) {
  res.render('form2');
});

router.get('/form3', function(req, res, next) {
    res.render('form3');
  });

module.exports = router;