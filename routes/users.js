var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.getUsers);

/*GET a user*/
router.get('/user', usersController.getUser);

/*POST login*/
router.post('/user', usersController.login);

module.exports = router;
