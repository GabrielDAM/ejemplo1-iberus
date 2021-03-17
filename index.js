import "./style.css";

var botonSaludo = document.getElementById("boton-saludo");
var inputNombre = document.getElementById("input-nombre");
var inputNombre = document.getElementById("contenedor");

function gestionClick() {
  alert("Hola " + inputNombre.value);
  contenedor.className = "";
}

botonSaludo.onclick = gestionClick;
