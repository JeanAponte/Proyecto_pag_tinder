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
      nombre, nacimiento, telefono, ciudad, pais, sexo, orSexual,
      aficiones, email, password, imagen
    } = req.body
  
    console.log(req.body);
    res.render('bienvenida');
  
  }



module.exports = indexController;