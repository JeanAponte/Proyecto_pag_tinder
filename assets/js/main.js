//Funciones página usuario.html

/*Función que obtiene los menús de la base de datos */

function getDataMenus(){
    let menus_json = JSON.parse(menus);
    return menus_json;
}

/*Función que recorre el array de menús de objetos JSON y lo muestra*/

function displayDataMenus (data){
    let menus_html = '';

    for (let i = 0; i < data.length; i++){
        menus_html += menus_toHTML(data[i]);
    }

    document.querySelector('.menus').innerHTML = menus_html;
}

/*Dado un objeto JSON de menú, devuelve su correspondiente HTML*/

function menus_toHTML (menus){
    let menus_toHtml = '<article class="menu " '+ menus.menu + '>\
        <div class="presentacion">\
        <a href ="#" target="_blank"> <h2>Menú ' + menus.menu + '</h2></a>\
        </div>\
        <div class="primer_plato">\
        <p><b>Primer plato:</b> ' + menus.primero + '</p>\
        </div>\
        <div class="segundo_plato">\
        <p><b>Segundo plato:</b> ' + menus.segundo + '</p>\
        </div>\
        <div class="postre">\
        <p><b>Postre: </b>' + menus.postre + '</p>\
        </div>\
        <div class="cafe">\
        <p><b>Café: </b>' + menus.cafe + '</p>\
        </div>\
        <div class="bebida">\
        <p><b>Bebida:</b> ' + menus.bebidas + '</p>\
        </div>\
        <div class="info_adicional">\
        <p><b>Días disponibles</b>: ' + menus.dia + '<p>\
        <p><b>Precio</b>: ' + menus.precio + ' €</p>\
        </div>\
        </article>';

        return menus_toHtml;
}


function main(){
    data = getDataMenus();
    displayDataMenus(data);
}

main();

//Fin de funciones página indice_menus.html
