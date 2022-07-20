/*Mostrar y ocultar la contraseña con el click al ojito*/
function mostrarPassword(){
    var x = document.getElementById("password");
    var y = document.getElementById("ocultar");
    var z = document.getElementById("mostrar");

    /*La muestro*/
    if(x.type == 'password'){
        x.type = "text";
        y.style.display = "inline";
        z.style.display = "none";
    }else{
        /*La oculto*/
        x.type = "password";
        y.style.display = "none";
        z.style.display = "inline";
    }
}

const movPag = document.querySelector(".movPag");/*Obitenes el primer elemento de la clase que se le pasa por parámetro*/
const botonAdelante2 = document.querySelector(".sigPag");/*Botón que va hacia delante de la página*/
const botonAtras1 = document.querySelector(".volver-pag1");
const botonAdelante3 = document.querySelector(".adelante-pag3");
const botonAtras2 = document.querySelector(".volver-pag2");
const botonAdelante4 = document.querySelector(".adelante-pag4");
const botonAtras3 = document.querySelector(".volver-pag3");
const botonFinal = document.querySelector(".fin");

const progressText = document.querySelectorAll(".paso p"); /*Selecciona todos los elementos de lo que le pase por parámetro
                                                            Al ser varios elementos, la variable se convierte automáticamente en un array*/

const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

/*Máximo de páginas que tengo en el formulario*/
let max = 4;
let contador = 1;
let c = 0; /*Otro contador para la funcionalidad del registro final*/


/*Avanzar a las páginas siguientes*/


botonAdelante2.addEventListener("click", function(e){
    e.preventDefault();
    
    var nombre = document.getElementById("nombres").value; /*Obtén el valor del input nombres y lo guardas en la variable*/
    var fechaNac = document.getElementById("fechaNac").value;
    var numTel = document.getElementById("numTel").value;

    /*Si todo está vacío*/
    if (nombre == "" && fechaNac == "" && numTel == ""){
        document.getElementById("nombres-error").innerHTML = "*Este campo no puede quedar vacío"; /*Inserto como contenido HTML al elemento seleccionado lo que hay a la derecha del =*/
        document.getElementById("nombres").style.borderColor = "#461453";

        document.getElementById("fechaNac-error").innerHTML = "*Este campo no puede quedar vacío";
        document.getElementById("fechaNac").style.borderColor = "#461453";

        document.getElementById("numTel-error").innerHTML = "*Este campo no puede quedar vacío";
        document.getElementById("numTel").style.borderColor = "#461453";
   
    }else if (  (nombre == "" || fechaNac == "" || numTel == "") || 
                (nombre.length < 2 || numTel.length != 9) || 
                (!verificarTexto(nombre) || !verificarNumTel(numTel))){
       
        /*Si sólo nombre está vacío*/
        if ( nombre == "" ){
            document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío.";
            document.getElementById("nombres").style.borderColor= "#461453"  ;    
          }else if (nombre.length < 2 ){
            document.getElementById("nombres-error").innerHTML = "* Debe tener 2 o más caractéres.";
            document.getElementById("nombres").style.borderColor= "#461453";      
          }else if (!verificarTexto(nombre) ){
            document.getElementById("nombres-error").innerHTML = "* Dato no válido.";
            document.getElementById("nombres").style.borderColor= "#461453";      
          }else {
            document.getElementById("nombres-error").innerHTML = "";
            document.getElementById("nombres").style.borderColor= "lightgrey";      
          }

        /*No se ha elegido la fecha de nacimiento*/
        if ( fechaNac == "" ){
            document.getElementById("fechaNac-error").innerHTML = "* Seleccione una fecha.";
            document.getElementById("fechaNac").style.borderColor="#461453";      
        }else {
            document.getElementById("fechaNac-error").innerHTML = "";
            document.getElementById("fechaNac").style.borderColor="lightgrey";      
        }
      
        /*Si el num de teléfono está vacío*/
        if ( numTel == "" ){
            document.getElementById("numTel-error").innerHTML = "* Este campo no puede quedar vacío."
            document.getElementById("numTel").style.borderColor="#461453"      
        }else if ( numTel.length != 9 && !verificarNumTel(numTel) ){
            document.getElementById("numTel-error").innerHTML = "* Debe ingresar solo números."
            document.getElementById("numTel").style.borderColor="#461453"      
        }else if ( numTel.length !=9 ){
            document.getElementById("numTel-error").innerHTML = "* Debe tener 9 dígitos."
            document.getElementById("numTel").style.borderColor="#461453"      
        }else if ( !verificarNumCel(numTel) ){
            document.getElementById("numTel-error").innerHTML = "* Ingreso de datos inválidos."
            document.getElementById("numTel").style.borderColor="#461453"      
        }else {
            document.getElementById("numTel-error").innerHTML = ""
            document.getElementById("numTel").style.borderColor="lightgrey"      
        }

    }else{

        document.getElementById("nombres-error").innerHTML = ""
        document.getElementById("nombres").style.borderColor= "lightgrey"
        document.getElementById("fechaNac-error").innerHTML = ""
        document.getElementById("fechaNac").style.borderColor= "lightgrey"
        document.getElementById("numTel-error").innerHTML = ""
        document.getElementById("numTel").style.borderColor= "lightgrey"
    
        movPag.style.marginLeft = "-25%";
        num[contador - 1].classList.add("active");/*Al numero de la posición 0 (contador = 1, por eso -1),
                                                a esa lista de clases (classList), agregale la clase "active"*/
        progressText[contador - 1].classList.add("active");
        progressCheck[contador - 1].classList.add("active");
        contador++;
    
        var aux = nombre + ", " + apellido1 + " " +apellido2;
        newUser = aux.toUpperCase();
    }

    /*Verificar texto*/
    function verificarTexto($n){
        var ExpRegular_Texto = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;/*Debe contener, cualquier letra mayúscula de la A a la Z, cualquier minúscula y todos los caracteres especiales. Lo final es para los espacios*/
        return ExpRegular_Texto.test($n);
    }

    /*Verificar numero de telefóno*/
    function verificarNumTel($m){
        var ExpRegular_Num = /^[\d]+$/;/*d: acepta toda clase de números*/
        return ExpRegular_Num.test($m);
    }
});

botonAdelante3.addEventListener("click", function(e){
    e.preventDefault();

    var ciudad = document.getElementById("ciudad").value;
    var pais = document.getElementById("pais").value;
    var sexo = document.getElementById("sexo").value;

    /*Si todo está vacío*/
    if (ciudad == "" && pais == "" && sexo == -1){
        document.getElementById("ciudad-error").innerHTML = "*Este campo no puede quedar vacío"; /*Inserto como contenido HTML al elemento seleccionado lo que hay a la derecha del =*/
        document.getElementById("ciudad").style.borderColor = "#461453";

        document.getElementById("pais-error").innerHTML = "*Este campo no puede quedar vacío";
        document.getElementById("pais").style.borderColor = "#461453";

        document.getElementById("sexo-error").innerHTML = "* Seleccione una opción."
        document.getElementById("sexo").style.borderColor="#461453"
   
    }else if (  (ciudad == "" || pais == "" || sexo == -1) || 
                (pais.length < 2) || 
                (!verificarTexto(ciudad) || !verificarTexto(pais))){
       
        /*Si sólo la ciudad está vacía*/
        if ( ciudad == "" ){
            document.getElementById("ciudad-error").innerHTML = "* Este campo no puede quedar vacío.";
            document.getElementById("ciudad").style.borderColor= "#461453"  ;        
          }else if (!verificarTexto(ciudad) ){
            document.getElementById("ciudad-error").innerHTML = "* Dato no válido.";
            document.getElementById("ciudad").style.borderColor= "#461453";      
          }else {
            document.getElementById("ciudad-error").innerHTML = "";
            document.getElementById("ciudad").style.borderColor= "lightgrey";      
          }

        /*Si sólo el país está vacío*/
        if ( pais == "" ){
            document.getElementById("pais-error").innerHTML = "* Este campo no puede quedar vacío.";
            document.getElementById("pais").style.borderColor= "#461453"  ;    
          }else if (pais.length < 2 ){
            document.getElementById("pais-error").innerHTML = "* Debe tener 2 o más caractéres.";
            document.getElementById("pais").style.borderColor= "#461453";      
          }else if (!verificarTexto(pais) ){
            document.getElementById("pais-error").innerHTML = "* Dato no válido.";
            document.getElementById("pais").style.borderColor= "#461453";      
          }else {
            document.getElementById("pais-error").innerHTML = "";
            document.getElementById("pais").style.borderColor= "lightgrey";      
          }
      
        /*No se ha elegido el sexo*/
        if ( sexo == -1 ){
            document.getElementById("sexo-error").innerHTML = "* Seleccione una opción."
            document.getElementById("sexo").style.borderColor="#461453"      
        }else {
            document.getElementById("sexo-error").innerHTML = ""
            document.getElementById("sexo").style.borderColor="lightgrey"      
        }

    }else{

        document.getElementById("ciudad-error").innerHTML = ""
        document.getElementById("ciudad").style.borderColor= "lightgrey"
        document.getElementById("pais-error").innerHTML = ""
        document.getElementById("pais").style.borderColor= "lightgrey"
        document.getElementById("sexo-error").innerHTML = ""
        document.getElementById("sexo").style.borderColor="lightgrey"
    
        movPag.style.marginLeft = "-50%";
        num[contador - 1].classList.add("active");
        progressText[contador - 1].classList.add("active");
        progressCheck[contador - 1].classList.add("active");
        contador++;

        var aux = nombre + ", " + apellido1 + " " +apellido2;
        newUser = aux.toUpperCase();
    }

    /*Verificar texto*/
    function verificarTexto($n){
        var ExpRegular_Texto = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;/*Debe contener, cualquier letra mayúscula de la A a la Z, cualquier minúscula y todos los caracteres especiales. Lo final es para los espacios*/
        return ExpRegular_Texto.test($n);
    }
});

botonAdelante4.addEventListener("click", function(e){
    e.preventDefault();

    var orSexual = document.getElementById("orientacion-sexual").value;

    /*Si la orientación sexual está vacía*/
    if (orSexual == -1){
        document.getElementById("orientacion-sexual-error").innerHTML = "* Seleccione una opción."
        document.getElementById("orientacion-sexual").style.borderColor="#461453"

    }else{

        document.getElementById("orientacion-sexual-error").innerHTML = ""
        document.getElementById("orientacion-sexual").style.borderColor="lightgrey"
    
        movPag.style.marginLeft = "-75%";
        num[contador - 1].classList.add("active");
        progressText[contador - 1].classList.add("active");
        progressCheck[contador - 1].classList.add("active");
        contador++;
    }
});

botonFinal.addEventListener("click", function(e){
    

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    /*Si todo está vacío*/
    if ( email == "" && password == "" ){

        document.getElementById("email-error").innerHTML = "* Este campo no puede quedar vacío."
        document.getElementById("email").style.borderColor="#461453"
        document.getElementById("password-error").innerHTML = "* Este campo no puede quedar vacío."
        document.getElementById("password").style.borderColor="#461453"

        e.preventDefault(); /*Evita enviar el formulario*/

    }else if( email == "" || password == "" || 
                email.length < 6 || password.length < 5 ||
                !verificarEmail(email) || !verificarPassword(password)){
    
        /*Si el email está vacío*/
        if ( email == "" ){
            document.getElementById("email-error").innerHTML = "* Este campo no puede quedar vacío."
            document.getElementById("email").style.borderColor="#461453"
                  
        }else if ( email.length < 6 ){
            document.getElementById("email-error").innerHTML = "* Debe tener 6 o más caractéres."
            document.getElementById("email").style.borderColor="#461453"      
        }else if ( !verificarEmail(email) ){
            document.getElementById("email-error").innerHTML = "* Ingreso de datos inválidos."
            document.getElementById("email").style.borderColor="#461453"      
        }else {
            document.getElementById("email-error").innerHTML = ""
            document.getElementById("email").style.borderColor="lightgrey"      
        }

        /*Contraseña incorrecta o vacía*/
        if ( password == "" ){
            document.getElementById("password-error").innerHTML = "* Este campo no puede quedar vacío."
            document.getElementById("password").style.borderColor="blueviolet"      
        }else if ( password.length < 5 && !verificarPassword(password) ){
            document.getElementById("password-error").innerHTML = "* Mínimo 5 carácteres"
            document.getElementById("password").style.borderColor="blueviolet"      
        }else if ( password.length < 5 ){
            document.getElementById("password-error").innerHTML = "* Debe tener 5 a más caractéres."
            document.getElementById("password").style.borderColor="blueviolet"      
        }else if ( !verificarPassword(password) ){
            document.getElementById("password-error").innerHTML = "* Mínimo una MAY, MIN y NUM."
            document.getElementById("password").style.borderColor="blueviolet"      
        }else {
            document.getElementById("password-error").innerHTML = ""
            document.getElementById("password").style.borderColor="lightgrey"      
        }

        e.preventDefault();
        
    }else{

        document.getElementById("email-error").innerHTML = ""
        document.getElementById("email").style.borderColor="lightgrey"
        document.getElementById("password-error").innerHTML = ""
        document.getElementById("password").style.borderColor="lightgrey"

        num[contador - 1].classList.add("active");
        progressText[contador - 1].classList.add("active");
        progressCheck[contador - 1].classList.add("active");
        contador++;

    }
    
    /*Verificar email*/
    function verificarEmail($n){
        var ExpRegular_Email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;/*Ingresa cualquier cosa antes del arroba, luego ingresa un arroba y finalice con 2 o 3 letras*/
        return ExpRegular_Email.test($n);
    }
    /*Verificar Password*/
    function verificarPassword($m){
        var ExpRegular_Num = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/; /* al menos un dígito, al menos una minúscula y al menos una mayúscula. */
        return ExpRegular_Num.test($m);
    }

    /*Enviar formulario*/
    function enviar_formulario(){
        document.form-registro.submit();
     }
});



/*Para volver hacia atrás*/

botonAtras1.addEventListener("click", "submit", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "0%";

    num[contador-2].classList.remove("active");
    progressCheck[contador-2].classList.remove("active");
    progressText[contador-2].classList.remove("active");
    contador--;
});

botonAtras2.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-25%";

    num[contador-2].classList.remove("active");
    progressCheck[contador-2].classList.remove("active");
    progressText[contador-2].classList.remove("active");
    contador--;
});

botonAtras3.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";

    num[contador-2].classList.remove("active");
    progressCheck[contador-2].classList.remove("active");
    progressText[contador-2].classList.remove("active");
    contador--;
});