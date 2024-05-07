// Carga el contenido del archivo especificado en el elemento con el ID dado
function Contenidos(url, idElemento) {
    var xhr = new XMLHttpRequest(); // Crea un objeto XMLHttpRequest
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(idElemento).innerHTML = this.responseText; // Inserta el contenido en el elemento
        }
    };
    xhr.open("GET", url, true); // Especifica el método y la URL del archivo
    xhr.send(); // Envía la solicitud
}

// Llama a la función cargarContenido para cargar el encabezado y el pie de página
window.onload = function() {
    Contenidos("head.html", "head");
    Contenidos("footer.html", "footer");
}
