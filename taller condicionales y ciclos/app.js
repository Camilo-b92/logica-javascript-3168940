/* //EJERCICIO 1
let number = parseFloat (prompt("Ingrese un numero"));
console.log ("El numero ingresado es:" + number);
if (number > 0) {
    console.log ("El numero es positivo");    
}

else if (number < 0){
    console.log ("El numero es negativo")
}

else if (number = 0) {
    console.log ("El numero es cero")
}
 */


/* //EJERCICIO 2
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (numero1 > 0) {
    alert("Positivo: " + numero1);
}
if (numero2 > 0) {
    alert("Positivo: " + numero2);
} */


/* //EJERCICIO 3
let number1 = parseFloat(prompt("Ingrese el primer número:"));
let number2 = parseFloat(prompt("Ingrese el segundo número:"));
if (number1 === number2) {
    alert("Multiplicación: " + (number1 * number2));
} else if (number1 > number2) {
    alert("Resta: " + (number1 - number2));
} else{
    alert("Suma: " + (number1 + number2));
} */

/* //EJERCICIO 4
let number1 = parseFloat(prompt("Ingrese el costo del artículo:"));
let number2 = parseFloat(prompt("Ingrese el dinero entregado por el cliente:"));

let cambio = number2 - number1;

alert("El cambio a entregar es: " + cambio); */

/* //EJERCICIO 5
let number1 = parseInt(prompt("Ingrese la cantidad de vacunas:"));
let number2 = parseFloat(prompt("Ingrese el costo de cada vacuna:"));
let number3 = parseFloat(prompt("Ingrese el costo de aplicación:"));

let totalGastado = number1 * (number2 + number3);

alert("El total gastado en vacunas es: " + totalGastado);*/

/* //EJERCICIO 6
let number1 = parseInt(prompt("Ingrese la cantidad de camisas:"));
let number2 = parseFloat(prompt("Ingrese el precio de cada camisa:"));

let totalCompra = number1 * number2;
let descuento;

if (number1 >= 3) {
    descuento = 0.20;
} else {
    descuento = 0.10;   
}

let totalPagar = totalCompra - (totalCompra * descuento);

alert("El total a pagar es: " + totalPagar);*/

/* //EJERCICIO 7
let number1 = parseFloat(prompt("Ingrese el dinero inicial del tendero:"));

let ventasTotales = 4 * 800000;              
let dineroCaja = number1 + ventasTotales;   
let pagoAcreedores = dineroCaja * 0.10;     
let dineroFinal = dineroCaja - pagoAcreedores;

alert("Dinero inicial: " + number1);
alert("Pago a acreedores: " + pagoAcreedores);
alert("Dinero final en caja: " + dineroFinal); */

/* //EJERCICIO 8
let sumaVentas = 0;

for (let i = 1; i <= 5; i++) {
    let number1 = parseFloat(prompt("Ingrese la venta del día " + i + ":"));
    sumaVentas += number1;
}

let promedio = sumaVentas / 5;

alert("El promedio de ventas en los últimos 5 días es: " + promedio);*/

/* //EJERCICIO 9
let number1 = parseFloat(prompt("Ingrese el primer número:"));
let number2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");

let resultado;

if (operacion === "+") {
    resultado = number1 + number2;
} else if (operacion === "-") {
    resultado = number1 - number2;
} else if (operacion === "*") {
    resultado = number1 * number2;
} else if (operacion === "/") {
    if (number2 !== 0) {
        resultado = number1 / number2;
    } else {
        alert("Error: no se puede dividir entre 0");
    }
} else {
    alert("Operación no válida");
}

if (resultado !== undefined) {
    alert("El resultado es: " + Math.trunc(resultado));
}*/

//EJERCICIO 10

let number1 = parseFloat(prompt("Ingrese el primer número:"));
let number2 = parseFloat(prompt("Ingrese el segundo número:"));
let number3 = parseFloat(prompt("Ingrese el tercer número:"));

if (number1 === number2 && number2 === number3) {

    alert("Los tres números son iguales: " + number1);
} else if (number1 === number2) {
    alert("El primer número y el segundo número son iguales: " + number1);
} else if (number1 === number3) {
    alert("El primer número y el tercer número son iguales: " + number1);
} else if (number2 === number3) {
    alert("El segundo número y el tercer número son iguales: " + number2);
} else {

    let mayor = Math.max(number1, number2, number3);
    let menor = Math.min(number1, number2, number3);
    let medio = number1 + number2 + number3 - mayor - menor;

    alert("Número mayor: " + mayor);
    alert("Número menor: " + menor);
    alert("Número medio: " + medio);
}


/* //EJERCICIO 11
let number1 = parseInt(prompt("Ingrese la edad del jugador:"));
let number2 = parseFloat(prompt("Ingrese la estatura del jugador en metros:"));
let number3 = parseFloat(prompt("Ingrese el peso del jugador en kilogramos:"));

if (number1 >= 18 && number2 > 1.70 && number3 >= 50 && number3 <= 90) {
    alert("El jugador queda SELECCIONADO.");
} else {
    alert("El jugador NO cumple los requisitos.");
} */

/* //EJERCICIO 12
let number1 = parseFloat(prompt("Ingrese el sueldo del trabajador:"));

const sueldoMinimo = 1623500;

if (number1 === sueldoMinimo) {
    number1 = number1 * 1.10;
}

alert("El sueldo a devengar es: " + number1); */

//EJERCICIO 13
/* let datos = [];

let number1 = prompt("Ingrese el primer dato:");
let number2 = prompt("Ingrese el segundo dato:");
let number3 = prompt("Ingrese el tercer dato:");

datos[0] = number1;
datos[1] = number2;
datos[2] = number3;

alert("Contenido del array: " + datos); */

/* //EJERCICIO 14
let number1;

while (true) {
    number1 = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");
    
    if (number1.toLowerCase() === "salir") {
        break;
    }
    
    alert("Nombre ingresado: " + number1);
}
 */

/* //EJERCICIO 15
while (true) {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 1000); 

    let respuesta = parseInt(prompt(`¿Cuánto es ${number1} x ${number2}?`));

    if (respuesta === number1 * number2) {
        alert("¡Ganaste! 🎉");
        break;
    } else {
        alert("Incorrecto ❌, intenta de nuevo...");
    }
}
 */ 