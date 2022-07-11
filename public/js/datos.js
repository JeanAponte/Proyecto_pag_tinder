function captura() {
    var nombre = document.getElementById("nombre").value;  
    if(nombre==""){
        alert("El nombre es obligatorio");
        document.getElementById("nombre").focus();

    } 
console.log(nombre);
}