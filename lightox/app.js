// VARIABLES PRINCIPALES
const equis = document.querySelector("#equis"); 
const sig = document.querySelector("#sig"); 
const ant = document.querySelector("#ant"); 
const imgprincipal = document.querySelector("#imgprincipal"); 
const fath = document.querySelector("#fath"); 
const flotante = document.querySelector("#flotante"); 
const cuadro = document.querySelector("#cuadro"); 

let indexActual = 0;

// FUNCIONES
function mostrarLightbox(index) {
    let minis = document.querySelectorAll(".min");
    imgprincipal.src = minis[index].src;
    indexActual = index;
    flotante.style.top = "0";
}

function ocultarLightbox() {
    flotante.style.top = "-100vh";
}

function siguienteImagen() {
    let minis = document.querySelectorAll(".min");
    indexActual = (indexActual + 1) % minis.length;
    mostrarLightbox(indexActual);
}

function anteriorImagen() {
    let minis = document.querySelectorAll(".min");
    indexActual = (indexActual - 1 + minis.length) % minis.length;
    mostrarLightbox(indexActual);
}

// EVENTOS
document.querySelectorAll(".min").forEach((mini, index) => {
    mini.addEventListener("click", () => mostrarLightbox(index));
});

equis.addEventListener("click", ocultarLightbox);
cuadro.addEventListener("click", ocultarLightbox);  
sig.addEventListener("click", siguienteImagen);
ant.addEventListener("click", anteriorImagen);