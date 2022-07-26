var mongoose = require('mongoose');
var userModel = require("../model/usuario");

/*Creo el controlador*/
var usersController = {};

/*Control de rutas de usuarios*/
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

/*Funciones de usuario*/
userController.obtenerUsuario = function (email){

  /*Comprobar si existe el usuario con el email pasado como parámetro
    *findOne es buscar a un único usuario mediante una o unas variable/s que le pasemos.
    *findOne({La propiedad que requiero de la BD: valor de lo que paso por el parámetro})
    *exec (finction (err, variable donde se guarda el usuario))
   */

  userModel.findOne({email:email}).exec(function(err, usuario){
    if ( err ){
       return false; //No se ha encontrado en la BD
    }else{
      return usuario; //Devuelve el usuario
    }
  });
}

/* Añadir un usuario a la BD */

userModel.agregarUsuario = function(err,usuario){

}

userController.auth = function(email){
    //Comprobar en la BD si existe el email. 

    if (userController.obtenerUsuario){
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


userController.list = function(){
    //Buscar usuarios en db (atributos queremos de cada usuario)
    return []; //Array con todos los usuarios
}

userController.friends = function(id_u){
    return []; //Array con todos los usuarios
}

module.exports = usersController;