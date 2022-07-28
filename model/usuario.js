//Crear el esquema de usuario con Schema.

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //cogemos el objeto Schema de la librería mongoose.

var usuarioSchema = new Schema({
    nombre: {type: String, required: true, max:20}, //tipo, si es obligatorio (required), max de caracteres que puede tener 
    ciudad: {type: String, required: true, max:50},
    pais: {type:String, required: true, max:50},
    aficiones: {type: [String], required: true, max:300},
    telefono: {type: String, required: true, max:10},
    email: {type:String, required: true, max:50},
    fecha_nacimiento: {type: String, required: true, max:100},
    imagen: {type:String}, //es String porque es una URL
    sexo: {type:String, required: true, max:100},
    orientacion_sexual: {type:String, required: true, max:20},
    password: {type:String, required: true, max:10},
});

module.exports = mongoose.model('Usuario', usuarioSchema); //exporto el modelo de usuario que he descrito
//model (nombre que queramos dar al esquema, varaible de esquema)
