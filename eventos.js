const element = document.getElementById("divV");

element.addEventListener("click", function () {
    alert("Hola! Soy el Div");
});

const botonElement = document.getElementById("boton");
botonElement.addEventListener('click', function (event) {
    event.stopPropagation(); // hace que no se active el evento del elemento solapado (el div)
    alert("Hola!");
});