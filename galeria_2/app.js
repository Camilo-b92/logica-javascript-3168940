//1. Captura de Variables
const titulo = document.querySelector(".titulo");
const screen = document.querySelector(".screen");
const miniaturas = document.querySelectorAll(".miniatura");
const body = document.body;

//2. Función
function cambiarImg(event) {
    const mini = event.target;
    titulo.textContent = mini.name;
    screen.src = mini.src;
    body.style.backgroundImage = `url(${mini.src})`;
}

//3. Recorre todas las miniaturas
miniaturas.forEach(mini => {
    mini.addEventListener("click", cambiarImg);
});
