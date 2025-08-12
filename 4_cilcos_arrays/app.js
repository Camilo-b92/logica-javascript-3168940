/* //Array
let frutas = ["mango","piña","papaya","uva","limón","aguacate"]
let jugadores = [
  {
    id: 1,
    nombre: "diaz", 
    pais: "col"
  },
    "james",
    "messi"
  ]

console.log(jugadores[0].nombre)

  //Objeto
let mango = {
  nombre: "Back to the future",
  estreno: 1986,
  director:  "Robert Zemeckis",
  calificacion: "8.5"
} */


/* // 1. Usando while para preguntar un número
let numero;
while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce el numero inicial:"));
}
console.log("Número ingresado:", numero);

// 2. Múltiplos de 5 hasta el número
let limite = parseInt(prompt("Introduce el numero limite:"));
for (let i = 1; i <= limite; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
} */

/* // 3. Mismo problema 1 pero usando do...while
let num;
do {
    num = parseInt(prompt("Introduce un número:"));
} while (isNaN(num));
console.log("Número ingresado con do...while:", num);

// 4. Números impares del 1 al 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
} */

// 5. Lista 1-100 excluyendo rango dado por usuario
let inicio = parseInt(prompt("Inicio del rango a excluir:"));
let fin = parseInt(prompt("Fin del rango a excluir:"));

for (let i = 1; i <= 100; i++) {
    if (i < inicio || i > fin) {
        console.log(i);
    }
}




//CREE UN CILCO FOR QUE IMPRIMA LA TABLA DE MULTIPLICIPLAR DEL 7}

// Tabla de multiplicar del 7
/* for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}
 */
