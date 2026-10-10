/**
 ** Condicionales
 * 
 * Los condicionales nos permiten ejecutar un bloque de código u otro dependiendo de si una condición es verdadera o falsa.
 * 
 * En JavaScript, los condicionales se implementan mediante las palabras clave `if`, `else if` y `else`.
 * 
 * También podemos utilizar el operador ternario `? :` para realizar una evaluación condicional en una sola línea.
 * 
 * Además, podemos utilizar la estructura `switch` para evaluar múltiples condiciones basadas en el valor de una variable.
*/


// if, else if, else

// if (si)

let age = 23

if (age == 23) {
    console.log("La edad es 23")
}

// else (si no)

if (age == 23) {
    console.log("La edad es 23")
} else {
    console.log("La edad no es 23")
}

// else if (si no, si)

if (age == 23) {
    console.log("La edad es 23")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 23 ni es menor de edad")
}

// Operador ternario

const message = age == 23 ? "La edad es 23" : "La edad no es 23"
console.log(message)

// switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)