var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.preventDefault(); //agregue el default
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) { // borre los esapcios
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button"); //agregue el ;
botonBorrar.textContent = "Eliminar invitado";//agregue el ;
botonBorrar.id = "boton-borrar";//agregue el ;
var corteLinea = document.createElement("br");//agregue el ;
document.body.appendChild(corteLinea);//agregue el ;
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados"); //agregue el ;
 
var elementoLista = document.createElement("div"); //agregue el ;
elementoLista.classList.added("elemento-lista"); //agregue el ;
lista.appendChild(elementoLista); //agregue el ;

var spanNombre = document.createElement("span"); //agregue el ;
var inputNombre = document.createElement("input"); //agregue el ;
var espacio = document.createElement("br"); //agregue el ;
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre; //agregue el ;
elementoLista.appendChild(spanNombre); //agregue el ;
elementoLista.appendChild(inputNombre); //agregue el ;
elementoLista.appendChild(espacio); //agregue el ;

function crearElemento(descripcion, valor) { //agregue indentación
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


botonBorrar = document.createElement("button"); // agregue el ; y quite la declaración de var porque ya habia sido declarado anteriormente
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}