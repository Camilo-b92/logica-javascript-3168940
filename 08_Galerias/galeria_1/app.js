const contenedor = document.getElementById("contenedor");
const titulo = document.getElementById("titulo");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");

let indice = 0;
const totalImagenes = contenedor.children.length;

function actualizar() {
  contenedor.style.transform = `translateX(${-indice * 400}px)`;
  titulo.textContent = `Imagen ${indice + 1}`;
}

siguiente.addEventListener("click", () => {
  indice++;
  if (indice >= totalImagenes) indice = 0;
  actualizar();
});

anterior.addEventListener("click", () => {
  indice--;
  if (indice < 0) indice = totalImagenes - 1;
  actualizar();
});

actualizar();
