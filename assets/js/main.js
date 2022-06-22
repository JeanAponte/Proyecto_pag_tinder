//Funciones página index_usuarios.html

/*Función que obtiene todos los usuarios de la base de datos */

function getDataUsuarios(){
    let usuarios_json = JSON.parse(usuarios);
    return usuarios_json;
}

/*Función que recorre el array de usuarios de objetos JSON y lo muestra*/

function displayDataUsuarios (data){
    let usuarios_html = '';

    for (let i = 0; i < data.length; i++){
        usuarios_html += usuarios_toHTML(data[i]);
    }

    document.querySelector('.usuarios').innerHTML = usuarios_html;
}

/*Dado un objeto JSON de usuario, devuelve su correspondiente HTML*/

function usuarios_toHTML (menus){
    let usuarios_toHtml = '<article class="usuario " '+ usuarios.id + '>\
        <div class="imagen">\
        <img src="' + usuarios.foto + '" alt="usuario ' + usuarios.id + '">\
        <figcaption>' + usuarios.nombre + '" "' + usuarios.edad + '</figcaption>\
        </div>\
        </article>';

        return usuarios_toHtml;
}


function main(){
    data = getDataUsuarios();
    displayDataUsuarios(data);
}

main();

//Fin de funciones página indice_menus.html
