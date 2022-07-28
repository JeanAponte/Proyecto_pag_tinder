var mongoose = require('mongoose');
var userModel = require("../model/Usuario");

/*Creo el controlador*/
var usersController = {};

/*Control de rutas de usuarios*/

usersController.login = function(req,res,next){
    let email = req.body.email;
    let password = req.body.password;
  
    if (userModel.findOne(email)){
      console.log(email, password);
      res.render('user', {email:email, password:password});
    }else{
      usersController.createUser();
    }
    
  }


/*------------Funciones de usuarios-----------*/

usersController.obtenerUsuario = function (id){

  userModel.findOne({_id:id}).exec(function(err, usuario){
    if ( err ){
       return false; //No se ha encontrado en la BD
    }else{
      return usuario; //Devuelve el usuario
    }
  });
}

/*----------------Listar usuarios------------------*/

usersController.list = function(req, res){
  userModel.find().exec(function(err, usuarios){
      if( err ){ console.log('Error: ', err); return; }
      console.log(usuarios);
      res.render('../views/users', {usuarios: usuarios}); 
  });
};

/*---------------Añadir un usuario a la BD----------------*/

usersController.createUser = async (nombre, fecha_nacimiento,telefono,ciudad,pais,sexo,orientacion_sexual,aficiones,email,password,imagen) =>{
    const user = new userModel({
        nombre: nombre,
        ciudad: ciudad,
        pais: pais,
        aficiones: aficiones,
        telefono: telefono,
        email: email,
        fecha_nacimiento: fecha_nacimiento,
        imagen: imagen,
        sexo: sexo,
        orientacion_sexual: orientacion_sexual,
        password: password
    });

    console.log(user);
    user.save();
}

/*----------------Borrado de usuarios---------------- */

/*Elimina todos los usuarios que tengan el nombre Laura*/
usersController.deleteUsers = async (req,res) => { 
  const result = await userModel.deleteMany({nombre: 'Laura'});
  console.log(result);
  res.send('Usuarios eliminados');
}

/*Elimina el primer dato que coincida con el nombre de Ana*/
usersController.deleteAnElement = async () => { 
  const result = await userModel.deleteOne({nombre: 'Ana'});
  console.log(result);
  res.send('Usuario eliminado');
}

/*Busca un usuario en específico y lo elimina*/
usersController.deleteElement = async (req,res) => { 
  const result = await userModel.findOneAndDelete({email: 'franCisco@msn.com'});
  console.log(result);
  res.send('El usuario ' + userModel.nombre +  ' ha sido eliminado');
}

/*Busca un usuario por ID y lo elimina*/
usersController.deleteElementById = async () => { 
  const result = await userModel.findByIdAndDelete('62d93373534b1a3e7bd0ef79');
  console.log(result);
  res.send('El usuario ' + userModel.nombre + ' ha sido eliminado');
}


/*------------Actualizar los datos-----------*/
/*Hay varias formas*/

/*Función para actualizar un objeto.*/
usersController.updateUser = async function(){
  const user = await userModel.updateOne({email: 'evandro77@gmail.com'}, 
  {telefono: '468957539'});
  console.log(user);
  user.save();
  res.render('./views/user', {usuarios:user})
 }

/*Otro modo de actualizar los datos sin necesidad del método update*/
usersController.updateUser2 = async (req,res) =>{
  const user = await userModel.findOne({email: 'camilad8@gmail.com'});
  console.log(user);
  user.sexo = 'Hombre'
  user.save();
  res.render('./views/user', {usuarios:user})
}

usersController.updateUser3 = async () => {
  const user = await userModel.findOneAndUpdate({nombre: 'Jose'}, 
  {nombre: 'Nina Simone'},
  {new: true}) //new:true para que se actualice el dato.
  console.log(user);
}

// usersController.list = async function(req,res){
//    const users = await userModel.find();
//    res.render('../views/users', {usuarios: users}); 
// }

// userController.auth = function(email){
//     //Comprobar en la BD si existe el email. 

//     if (userController.obtenerUsuario){
//       if (req.cookies['nombre-usuario']){
//         res.render('user');
//       }else{
//         res.cookie('nombre-usuario', req.body.nombre, 60000).send("cookie definida");//a la variable res se le asigna una cookie con un nombre, un valor y una fecha de expiración (en ms)
//         //Cookie que dura 60 segundos. Por defecto el tiempo de expiración es un mes.
//       }

//       return true;

//     }else{
//       res.render('error');
//       return false;
//     } 
// }

module.exports = usersController;