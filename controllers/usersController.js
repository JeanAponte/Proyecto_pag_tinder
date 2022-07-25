var usersController = {};

usersController.getUsers = function(req, res, next) {
    res.render('users');
  }

usersController.getUser = function(req, res, next) {
    res.render('user');
  }

usersController.login = function(req,res,next){
    let email = req.body.email;
    let password = req.body.password;
  
    console.log(email, password);
    res.render('user', {email:email, password:password});
  }

module.exports = usersController;