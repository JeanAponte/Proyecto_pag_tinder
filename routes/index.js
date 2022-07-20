const console = require('console');
const { Console } = require('console');
const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req);
  res.render('index');
});

router.get('/consejos_seguridad', function (req, res) {
  res.render('consejos_seguridad');
});

router.get('/normas', function (req, res) {
  res.render('normas');
});

router.get('/filtro', function (req, res) {
  res.render('filtro');
});

router.post('/form2', function (req, res, next) {
  let nombre = req.body.nombre;
  let email = req.body.email;
  let password = req.body.email;

  console.log(nombre, email, password);
  res.send("Muchas gracias " + nombre);
})

router.get('/contactanos', function (req, res) {
  res.render('contactanos');
});

router.post('/bienvenida', function (req, res) {
  res.render('bienvenida');
});

module.exports = router;
