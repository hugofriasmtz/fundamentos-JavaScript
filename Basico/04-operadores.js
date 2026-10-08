/*
    Los operadores Artimeticos los podemos hacer dentro de un consolo.log() o 
    dentro de una variable, y nos permiten hacer operaciones matematicas con los numeros.
*/

// Operadores Aritméticos dentro de un console.log()
console.log(2 + 2) // Suma
console.log(2 - 2) // Resta
console.log(2 * 2) // Multiplicación
console.log(2 / 2) // División
console.log(2 % 2) // Módulo (Residuo de la división)
console.log(2 ** 2) // Exponente

// Operadores Aritméticos dentro de una variable

let suma = 5 + 5
let resta = 5 - 5
let multiplicacion = 5 * 5
let division = 5 / 5
let modulo = 5 % 5
let exponente = 5 ** 5

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)

// Incremento y Decremento

let incremento = 5
incremento++ // Incremento en 1
console.log(incremento)

let decremento = 5
decremento-- // Decremento en 1
console.log(decremento)

/*
    Los operadores de asignación nos permiten asignar valores a las variables,
    y podemos hacer operaciones matematicas con los valores de las variables. 
*/

let asignacion = 5
asignacion += 5 // Asignación de suma
console.log(asignacion)

asignacion -= 5 // Asignación de resta
console.log(asignacion)

asignacion *= 5 // Asignación de multiplicación
console.log(asignacion)

asignacion /= 5 // Asignación de división
console.log(asignacion)

asignacion %= 5 // Asignación de módulo
console.log(asignacion)

asignacion **= 5 // Asignación de exponente
console.log(asignacion)


/**
 * Los Operdadores de compracion nos permiten comparar valores y nos devuelven un valor booleano (true o false)
 ** Igualdad (==) y Desigualdad (!=)
 ** Igualdad estricta (===) y Desigualdad estricta (!==)
 ** Mayor que (>)
 ** Menor que (<)
 ** Mayor o igual que (>=)
 ** Menor o igual que (<=)
 * La igualdad y desigualdad estricta nos permite comparar valores y tipos de datos,
 *  mientras que la igualdad y desigualdad simple solo compara valores.
 * 
 * Por ejemplo:
 * 5 == "5" // true
 * 5 === "5" // false
 */

let igual = 5 
console.log(igual == "5" ) // Igualdad

let desigual = 5 
console.log(desigual != 3) // Desigualdad

let igualEstricto = 5 
console.log(igualEstricto === 5) // Igualdad estricta

let desigualEstricto = 5 
console.log(desigualEstricto !== "5") // Desigualdad estricta

let mayorQue = 8 
console.log(mayorQue > 5) // Mayor que

let menorQue = 3 
console.log(menorQue < 5) // Menor que

let mayorOIgualQue = 4 
console.log(mayorOIgualQue >= 5) // Mayor o igual que

let menorOIgualQue = 5 
console.log(menorOIgualQue <= 5) // Menor o igual que

/**
 * Operadores Lógicos nos permiten combinar expresiones booleanas y nos devuelven un valor booleano (true o false)
 ** AND (&&) - Devuelve true si ambas expresiones son true
 ** OR (||) - Devuelve true si al menos una de las expresiones es true
 ** NOT (!) - Devuelve true si la expresión es false y viceversa
*/


// Ejemplo 1: AND (&&) - Entrar si hay entradas y se es mayor de edad
let entradasDisponibles = 1
let edad = 18
console.log(entradasDisponibles > 0 && edad >= 18) // true

// Ejemplo 2: OR (||) - Usar un método de contacto disponible
let emailsDisponibles = 0
let telefonosDisponibles = 1
console.log(emailsDisponibles > 0 || telefonosDisponibles > 0) // true

// Ejemplo 3: NOT (!) - Comprobar si no hay tareas pendientes
let tareasPendientes = 0
console.log(!tareasPendientes) // true

/**
 * Operadores Ternarios nos permiten evaluar una expresión y devolver un valor
 * u otro dependiendo de si la expresión es true o false
 * La sintaxis es: condicion ? valorSiTrue : valorSiFalse
 */


let edadUsuario = 20
let mensaje = edadUsuario >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mensaje) // Eres mayor de edad