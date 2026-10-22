/**
 ** FUNCIONES AVANZADAS EN JAVASCRIPT
 *
 * Una función puede almacenarse en una variable, recibirse como argumento y
 * devolverse desde otra función. Esta característica permite crear código
 * flexible y reutilizable.
 *
 * En este archivo veremos:
 * - Funciones como ciudadanos de primera clase.
 * - Arrow functions y el comportamiento de `this`.
 * - IIFE, parámetros rest y operador spread.
 * - Closures, recursividad, aplicación parcial y currificación.
 * - Callbacks.
 *
 * 
*/


/**
 * 1. FUNCIONES COMO CIUDADANOS DE PRIMERA CLASE
 *
 * En JavaScript, una función es un valor. Por eso podemos guardarla en una
 * variable, pasarla como argumento o devolverla desde otra función.
*/

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

// La función se ejecuta usando el nombre de la variable.
greet("Brais")

// `greetFunction` recibe una función y la ejecuta.
function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "MoureDev")

// Una función también puede devolver otra función.
function returnGreeting() {
    return greet
}

const greetAgain = returnGreeting()
greetAgain("Brais Moure")


/**
 * 2. ARROW FUNCTIONS
 *
 * Las arrow functions ofrecen una sintaxis más corta. También tienen dos
 * diferencias importantes frente a las funciones tradicionales:
 * - Con un solo parámetro se pueden omitir los paréntesis.
 * - No crean su propio `this`; usan el `this` del contexto exterior.
 *
 * Cuando el cuerpo no usa llaves, el retorno es implícito.
*/

const multiply = (a, b) => a * b
console.log(multiply(2, 5)) // 10

const square = number => number * number
console.log(square(4)) // 16

// Con llaves, debemos escribir `return` explícitamente.
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero")
    }
    return a / b
}

console.log(divide(10, 2)) // 5


/**
 * 3. `this` EN FUNCIONES TRADICIONALES Y ARROW FUNCTIONS
 *
 * En un método tradicional, `this` hace referencia al objeto que llama al
 * método. Una arrow function no crea su propio `this`, por lo que no debe
 * usarse como método si necesitamos acceder al objeto mediante `this`.
*/

const handler = {
    name: "Brais",
    greeting() {
        console.log(`Hola, ${this.name}`)
    },
    // La arrow function conserva el `this` del contexto exterior.
    arrowGreeting: () => {
        console.log("Una arrow function no tiene un `this` propio")
    }
}

handler.greeting() // Hola, Brais
handler.arrowGreeting()

// Las arrow functions sí son útiles en callbacks porque conservan el `this`
// del lugar donde fueron creadas.


/**
 * 4. IIFE (EXPRESIÓN DE FUNCIÓN INVOCADA INMEDIATAMENTE)
 *
 * Una IIFE se define y se ejecuta en la misma expresión. Puede servir para
 * crear un ámbito aislado y evitar exponer variables innecesariamente.
*/

(function () {
    console.log("IIFE clásica")
})()

(() => {
    console.log("IIFE con arrow function")
})()


/**
 * 5. PARÁMETROS REST (`...`)
 *
 * El parámetro rest reúne todos los argumentos restantes en un array. Debe
 * aparecer como el último parámetro de la función.
*/

function sum(...numbers) {
    let result = 0

    for (const number of numbers) {
        result += number
    }

    return result
}

console.log(sum(1, 2, 3, 4, 5)) // 15
console.log(sum(10, 15)) // 25
console.log(sum()) // 0


/**
 * 6. OPERADOR SPREAD (`...`)
 *
 * El operador spread descompone un array en valores individuales. Es útil
 * cuando una función espera argumentos separados.
*/

const numbers = [1, 2, 3]

function sumThreeNumbers(a, b, c) {
    return a + b + c
}

console.log(sumThreeNumbers(1, 2, 3)) // Sin spread
console.log(sumThreeNumbers(...numbers)) // Con spread: 1, 2 y 3


/**
 * 7. CLOSURES (CLAUSURAS)
 *
 * Una closure aparece cuando una función conserva el acceso a las variables
 * del ámbito donde fue creada, incluso después de que ese ámbito termine.
 * Esto permite proteger datos internos y exponer solo las operaciones
 * necesarias.
*/

function createCounter() {
    let counter = 0

    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter() // Contador: 1
counter() // Contador: 2

const anotherCounter = createCounter()
anotherCounter() // Contador: 1
// Cada llamada a `createCounter` crea un contador independiente.


/**
 * 8. RECURSIVIDAD
 *
 * Una función recursiva se llama a sí misma. Necesita:
 * - Un caso base que detenga las llamadas.
 * - Un caso recursivo que se acerque al caso base.
*/

function factorial(number) {
    if (number < 0 || !Number.isInteger(number)) {
        throw new Error("El factorial requiere un entero no negativo")
    }

    if (number <= 1) {
        return 1
    }

    return number * factorial(number - 1)
}

console.log(factorial(5)) // 120


/**
 * 9. APLICACIÓN PARCIAL
 *
 * La aplicación parcial fija uno o varios argumentos de una función y
 * devuelve otra función que espera los argumentos restantes.
*/

function partialSum(firstNumber) {
    return function (secondNumber, thirdNumber) {
        return sum(firstNumber, secondNumber, thirdNumber)
    }
}

const sumStartingWithFour = partialSum(4)
console.log(sumStartingWithFour(2, 3)) // 9
console.log(sumStartingWithFour(1, 2)) // 7


/**
 * 10. CURRIFICACIÓN (CURRYING)
 *
 * La currificación transforma una función con varios parámetros en una
 * cadena de funciones, donde cada función recibe un parámetro.
*/

function currySum(firstNumber) {
    return function (secondNumber) {
        return function (thirdNumber) {
            return function (fourthNumber) {
                return sum(firstNumber, secondNumber, thirdNumber, fourthNumber)
            }
        }
    }
}

const sumWithOneAndTwo = currySum(1)(2)
const sumWithOneTwoAndThree = sumWithOneAndTwo(3)

console.log(sumWithOneTwoAndThree(4)) // 10
console.log(sumWithOneTwoAndThree(5)) // 11
console.log(sumWithOneAndTwo(5)(7)) // 15


/**
 * 11. CALLBACKS
 *
 * Un callback es una función que se pasa a otra función para que sea
 * ejecutada después, normalmente cuando termina una operación.
*/

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function showResult(result) {
    console.log(`Resultado: ${result}`)
}

function showDetailedResult(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], showResult)
processData([1, 2, 3], showDetailedResult)
processData([1, 2, 3], result => {
    console.log(`Resultado desde una arrow function: ${result}`)
})


/**
 * RESUMEN
 *
 * - Las funciones pueden guardarse, pasarse como argumentos y devolverse.
 * - Las arrow functions tienen retorno implícito y un `this` léxico.
 * - Rest reúne argumentos en un array; spread los descompone.
 * - Una closure conserva variables de su ámbito original.
 * - La recursividad necesita siempre un caso base.
 * - La aplicación parcial fija argumentos; el currying los recibe uno a uno.
 * - Un callback es una función que otra función ejecuta.
*/
