//Boolean(...)

console.log( ' "5 == 5" ', "5" == "5" ) //TRUE
console.log( ' "5 === 5" ',  "5" === "5") //TRUE
console.log( ' 5 === 5" ', 5 === "5") //FALSE
console.log( ' "5 == 5" ', 5 == "5") //TRUE
console.log( ' 5 === (3+2) ', "5" === (3+2)) //FALSE
console.log( ' 5 === 5 ', 5 ===5) //TRUE

console.log( 5 + "3" ) //53
console.log( 5 + Number ("3") ) //8
console.log( 5 * 3 ) //15
console.log( 5 + 3 ) //8

//Pida 2 numerosal usuario y sumelos//

//let num1 = Number (prompt ('Dame num1'))
//let num2 = Number (prompt ('Dame num2'))
//let resultado = num1 + num2
//alert (" El resultado de tu suma es " + resultado)

//Ejercicio 1//

let num1 = Number (prompt('El numero 1 para la suma es '))
let num2 = Number (prompt('El numero 2 para la suma es '))
let resultado1 = num1 + num2 
//alert ("La suma del numero 1 y el numero 2 es " + resultado1)

let num3 = Number (prompt('El numero 3 para la resta es '))
let num4 = Number (prompt('El numero 4 para la resta es '))
let resultado2 = num3 - num4
//alert ("La resta del numero 3 y el numero 4 es " + resultado2)

let num5 = Number (prompt('El numero 5 para la multiplicacion es '))
let num6 = Number (prompt('El numero 6 para la multiplicacion es '))
let resultado3 = num5 * num6
//alert ("La multiplicacion del numero 5 y el numero 6 es " + resultado3)

let num7 = Number (prompt('El numero 7 para la division es '))
let num8 = Number (prompt('El numero 8 para la division es '))
let resultado4 = num7 / num8
//alert ("La division del numero 7 y el numero 8 es " + resultado4) 


console.log(`Tu numero es ${num1}`)