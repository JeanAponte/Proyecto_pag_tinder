let User = require('../model/User')

var authController = {}

authController.form = function(req, res, next) {
    res.render('users/user');
}


authController.login = function(req, res, next){
    console.log(req.body)
    //res.render('login');
    let email = req.body.email;
    let password = req.body.password;
    console.log(email,password);
    
    if(User.auth(email, password)){
        res.send('logged');
    }else{
        res.send('not logged');
    }

    // 1.2 - cargo información usuario
    // User.info()
    // 1.3 - creo cookie para mantener usuario autenticado
    // crearCookie(User.info().id)

    
    //res.send('Muchas gracias por contatar con nosotros '+email+' , será cocinado en breve.');
    //res.render('validar-contacto', {email:email, password:password})
}

authController.authGoogle = function(req,res,next){
    //redirect a pagina de google
}

authController.authGoogleCallback = function(req,res,next){
    //valido respuesta de google

    //no ha funcionado
    //res.send('no ha funcionado');
    //si ha funcionado
    // 1- compruebo si el usuario existe en mi db
    // 1.1 - si no existe -> registro usuario
    // 1.2 - cargo información usuario
    // 1.3 - creo cookie para mantener usuario autenticado

}



module.exports = authController