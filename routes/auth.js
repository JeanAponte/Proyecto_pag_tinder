var express = require('express');
var router = express.Router();

var auth = require('../controller/authController.js');

/* GET login page. */
router.get('/login', auth.form);

/* POST login page. */
router.post('/login', auth.login);

module.exports = router;
