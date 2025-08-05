//EJERCICIO 1

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));

// Primero validamos si puede entrar a la discoteca
if (edad >= 18) {
    alert("Puedes ingresar a la discoteca.");

    // Si tiene la edad permitida, verificamos si puede ingresar a la zona VIP
    if (nombre.toLowerCase() === "Mario" || nombre.toLowerCase() === "Carlos") {
        alert("Tienes acceso a la zona VIP.");
    } else {
        alert("No tienes acceso a la zona VIP.");
    }

} else {
    // Si no cumple con la edad, no puede entrar a nada
    alert("No puedes ingresar a la discoteca ni a la zona VIP.");
}

/* //EJERCICIO 2 

// Pedimos los datos al usuario
let estatura = parseInt(prompt("Ingresa tu estatura en cm:"));
let velocidad = parseInt(prompt("Ingresa tu velocidad en km/h:"));
let edad = parseInt(prompt("Ingresa tu edad:"));

// Verificamos si cumple con estatura y velocidad
if (estatura >= 170 && velocidad >= 27) {
    alert("¡Puedes ingresar al equipo!");

    // Ahora clasificamos por edad
    if (edad < 18) {
        alert("Serás asignado a las divisiones menores.");
    } else {
        alert("Serás asignado al equipo profesional.");
    }

} else {
    alert("No cumples con los requisitos de ingreso al equipo.");
}
 */ 