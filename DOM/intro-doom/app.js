// 1. Seleccionar los elementos
const pantalla = document.querySelector(".pantalla");
const btnmenos = document.querySelector(".btn-menos");
const btnmas = document.querySelector(".btn-mas");

// 2. Definir el contador inicial
let counter = 0;

// 3. Funciones
function incrementar() {
  counter++;
  pantalla.textContent = counter;

  // Cambiar color del texto
  if (counter >= 10) {
    pantalla.style.color = "red";
  } else {
    pantalla.style.color = "black";
  }

  // Cambiar color de fondo
  if (counter >= 30) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function decrementar() {
  if (counter > 0) {
    counter--;
    pantalla.textContent = counter;
  }

  // Cambiar color del texto
  if (counter >= 10) {
    pantalla.style.color = "red";
  } else {
    pantalla.style.color = "black";
  }

  // Cambiar color de fondo
  if (counter >= 30) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

// 4. Eventos
btnmas.addEventListener("click", incrementar);
btnmenos.addEventListener("click", decrementar);
