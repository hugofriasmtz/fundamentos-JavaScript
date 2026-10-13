/**
 * BUCLES EN JAVASCRIPT
 *
 * Un bucle es una estructura de control que permite repetir un bloque de
 * código. En lugar de escribir la misma instrucción muchas veces, indicamos
 * cuándo debe comenzar, cuándo debe continuar y cuándo debe terminar.
 *
 * IMPORTANTE:
 * Todo bucle debe tener una forma de avanzar hacia el final. Si la condición
 * nunca cambia, podemos crear un bucle infinito.
*/



/**
 * * `for`
 * Sirve para repetir un bloque cuando normalmente sabemos cuántas veces
 * queremos repetirlo o necesitamos recorrer las posiciones de un array.
 * Tiene tres partes:
 *
 *   for (inicio; condición; actualización) {
 *       código que se repite
 *   }
*/

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

// `for` también sirve para recorrer un array usando su índice.
// `numbers.length` indica cuántos elementos tiene el array.
// Como los índices empiezan en 0, la condición correcta es `i < numbers.length`.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

/**
 **`while`
 * Sirve para repetir un bloque mientras una condición sea verdadera. Es útil
 * cuando no sabemos exactamente cuántas repeticiones habrá, porque el ciclo
 * termina cuando la condición deja de cumplirse.
 * 
 * ! CUIDADO!
 * Si la condición nunca se vuelve falsa, el bucle se ejecutará infinitamente.
 * ocasionando que el programa o navegador se bloquee.
 * Por eso es importante que la condición cambie en algún momento.
*/

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}


/**
 ** `do...while`
 * Sirve para ejecutar un bloque al menos una vez y después comprobar la
 * condición. La comprobación ocurre al final, a diferencia de `while`, que la
 * hace antes de ejecutar el bloque.
*/

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)


/**
 *  * `for...of`
 * Sirve para recorrer directamente los valores de un array, un Set, un
 * string u otra colección iterable. Es útil cuando necesitamos cada valor
 * pero no necesitamos conocer su índice o posición.
 *
 * `for...in`
 * Sirve para recorrer las propiedades o claves de un objeto. En cada vuelta
 * obtenemos el nombre de una propiedad, que después podemos usar para
 * acceder a su valor. Para recorrer los valores de un array suele ser
 * preferible `for`, `for...of` o `forEach`, no `for...in`.
*/

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Hugo", "Jesus", "hugofrias", 23, true, "hugofrias@github.com"])

const myMap = new Map([
    ["name", "Hugo"],
    ["email", "hugofrias@github.com"],
    ["age", 23]
])

const myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}


/**
 * `break`
 * Termina por completo el bucle inmediatamente. Se utiliza cuando ya hemos
 * encontrado el resultado que buscábamos o ya no necesitamos continuar.
 *
 * `continue`
 * Omite la vuelta actual y pasa a la siguiente. Se utiliza para saltar un
 * valor concreto sin terminar todo el bucle.
*/

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}