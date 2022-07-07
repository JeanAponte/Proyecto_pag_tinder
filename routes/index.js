var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/users.ejs', function(req, res) {
  res.render('users');
});

router.get('/consejos_seguridad.ejs', function(req, res) {
  res.render('consejos_seguridad');
});

router.get('/normas.ejs', function(req, res) {
  res.render('normas');
});

router.get('/form.ejs', function(req, res) {
  res.render('form');
});

router.get('/filtro.ejs', function(req, res) {
  res.render('filtro');
});

module.exports = router;
