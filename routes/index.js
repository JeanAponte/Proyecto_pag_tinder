const console = require('console');
const { Console } = require('console');
const { query } = require('express');
var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.getHome);

/* GET Safety tips page. */
router.get('/consejos_seguridad', indexController.getConsejos);

/* GET Rules page. */
router.get('/normas', indexController.getNormas);

/* GET Filter page. */
router.get('/filtro', indexController.getFiltro);

/* GET Welcome page. */
router.post('/bienvenida', indexController.getBienvenida);

module.exports = router;
