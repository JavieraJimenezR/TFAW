// Obtiene todas las filas de la tabla
var filas = document.getElementsByTagName("tr");

// Recorre todas las filas y agrega un evento de clic a cada una
for (var i = 0; i < filas.length; i++) {
  filas[i].addEventListener("click", function() {
    window.location.href = "informacion-pedido.html";
  });
}