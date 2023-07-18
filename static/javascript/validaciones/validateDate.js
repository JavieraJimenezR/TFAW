// Obtener el elemento de entrada de fecha
const fechaInput = document.getElementById("fecha-disponibilidad");

// Establecer la fecha mínima en la fecha actual
const fechaActual = new Date().toISOString().split("T")[0];
fechaInput.setAttribute("min", fechaActual);
