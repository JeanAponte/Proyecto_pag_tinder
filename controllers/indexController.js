var usersController = require('./usersController');
var indexController = {};

indexController.getHome = function (req, res, next) {
    console.log(req);
    res.render('index');
} 

indexController.getConsejos = function (req, res) {
    res.render('consejos_seguridad');
}

indexController.getNormas = function (req, res) {
    res.render('normas');
  }

indexController.getFiltro = function (req, res) {
    res.render('filtro');
  }

indexController.getBienvenida = function (req, res, next) {
    let {
      nombre, fecha_nacimiento, telefono, ciudad, pais, sexo, orientacion_sexual,
      aficiones, email, password, imagen
    } = req.body
  
    console.log(sexo,orientacion_sexual);
    console.log(telefono);
    console.log(req.body);
    usersController.createUser(nombre, fecha_nacimiento,telefono,ciudad,pais,sexo,orientacion_sexual,aficiones,email,password,imagen);
    res.render('bienvenida');
  
  }



module.exports = indexController;