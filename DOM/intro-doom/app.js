const pantalla = document.querySelector(".pantalla");
const btnmenos = document.querySelector(".btn-menos");
const btnmas = document.querySelector(".btn-mas");

let counter = 0;

function incrementar() {
  counter++;
  pantalla.textContent = counter;

  if (counter >= 10) {
    pantalla.style.color = "red";
  } else {
    pantalla.style.color = "black";
  }

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

  if (counter >= 10) {
    pantalla.style.color = "red";
  } else {
    pantalla.style.color = "black";
  }

  if (counter >= 30) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

btnmas.addEventListener("click", incrementar);
btnmenos.addEventListener("click", decrementar);
