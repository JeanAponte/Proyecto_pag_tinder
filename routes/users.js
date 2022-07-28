var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.list);

/*GET a user*/
router.get('/user', usersController.obtenerUsuario);

/*POST login*/
router.post('/user', usersController.login);

module.exports = router;
