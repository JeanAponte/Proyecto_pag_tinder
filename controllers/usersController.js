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

userController.auth = function(email, password,req,res){
    //Comprobar en la BD si existe el email. 
    if (email == req.body.email && password == req.body.password){
      if (req.cookies['nombre-usuario']){
        res.render('user');
      }else{
        res.cookie('nombre-usuario', req.body.nombre, 60000).send("cookie definida");//a la variable res se le asigna una cookie con un nombre, un valor y una fecha de expiración (en ms)
        //Cookie que dura 60 segundos. Por defecto el tiempo de expiración es un mes.
      }

      return true;

    }else{
      res.render('error');
      return false;
    } 
}


User.list = function(){
    //Buscar usuarios en db (atributos queremos de cada usuario)
    return []; //Array con todos los usuarios
}

user.friends = function(id_u){
    return []; //Array con todos los usuarios
}

module.exports = usersController;