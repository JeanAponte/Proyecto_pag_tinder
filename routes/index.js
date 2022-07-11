var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/users', function(req, res) {
  res.render('users');
});

router.get('/consejos_seguridad', function(req, res) {
  res.render('consejos_seguridad');
});

router.get('/normas', function(req, res) {
  res.render('normas');
});

router.get('/filtro', function(req, res) {
  res.render('filtro');
});

router.get('/forminiciarsesion', function(req, res) {
  res.render('forminiciarsesion');
});

router.get('/contactanos', function(req, res) {
  res.render('contactanos');
});

module.exports = router;
