/*
 * Un array es una colección ordenada de elementos.
 * Cada elemento tiene una posición llamada índice.
 * En JavaScript, el primer índice siempre empieza en 0.
 *
 * Los arrays pueden guardar varios tipos de datos:
 * números, cadenas, booleanos, objetos, otros arrays, etc.
 */

// 1. Declaración

let myArray = []
let myArray2 = new Array()

console.log("Array vacío con []:", myArray)
console.log("Array vacío con new Array():", myArray2)

// 2. Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log("myArray = [3]:", myArray)
console.log("myArray2 = new Array(3):", myArray2)

// Importante: new Array(3) crea un array con 3 posiciones vacías.
// En cambio, [3] crea un array con un único valor: 3.

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log("myArray con números:", myArray)
console.log("myArray2 con números:", myArray2)

myArray = ["Hugo", "Karen", "hugofrias", 23, true]
myArray2 = new Array("Hugo", "Karen", "hugofrias", 37, true)

console.log("Array con varios tipos:", myArray)
console.log("Array creado con new Array y varios valores:", myArray2)

// 3. Acceso a elementos por índice

console.log("Primer elemento:", myArray[0])
console.log("Segundo elemento:", myArray[1])
console.log("Cuarto elemento:", myArray[3])

// 4. Modificar elementos por índice

myArray2 = new Array(3)
myArray2[0] = "Hugo"
myArray2[1] = "hugofrias"
myArray2[2] = "Karen"

console.log("Array modificado por índices:", myArray2)

myArray = []
myArray[0] = "Hugo"
myArray[1] = "hugofrias"
myArray[2] = "Karen"

console.log("Array con índices definidos manualmente:", myArray)

// Si dejamos huecos, el array queda con posiciones vacías:
let arrayConHuecos = []
arrayConHuecos[0] = "Hola"
arrayConHuecos[3] = "JavaScript"

console.log("Array con huecos:", arrayConHuecos)
console.log("Longitud del array con huecos:", arrayConHuecos.length)

// 5. Métodos comunes

// Partimos de un array vacío para practicar push().
myArray = []

// push() agrega un elemento al final
myArray.push("Hugo")
myArray.push("hugofrias")
myArray.push("Karen")
myArray.push(23)

console.log("Después de push:", myArray)

// pop() elimina el último elemento y lo devuelve
console.log("pop():", myArray.pop())
console.log("Después de pop():", myArray)

// shift() elimina el primer elemento y lo devuelve
console.log("shift():", myArray.shift())
console.log("Después de shift():", myArray)

// unshift() agrega elementos al inicio
myArray.unshift("Hugo", "hugofrias", "Karen")
console.log("Después de unshift:", myArray)

// length devuelve la cantidad de elementos
console.log("Longitud del array:", myArray.length)

// 6. Vaciar un array

// Podemos vaciar el array asignando uno nuevo o cambiando su longitud.
myArray = []
myArray.push("Hugo", "Karen", "hugofrias")
myArray.length = 0 // alternativa para vaciarlo.
console.log("Array vacío después de length = 0:", myArray)

// 7. slice() crea una copia parcial del array

myArray = ["Hugo", "Karen", "hugofrias", 23, true]
let myNewArray = myArray.slice(1, 3)

console.log("Array original:", myArray)
console.log("slice(1, 3):", myNewArray)

// El primer índice es inclusivo y el segundo es exclusivo.
// slice(1, 3) devuelve elementos desde la posición 1 hasta 2.
// slice() no modifica el array original.

// 8. splice() modifica el array original

myArray = ["Hugo", "Karen", "hugofrias", 23, true]
myArray.splice(1, 3)
console.log("Después de splice(1, 3):", myArray)

myArray = ["Hugo", "Karen", "hugofrias", 23, true]
myArray.splice(1, 2, "Nueva entrada")
console.log("Después de splice(1, 2, 'Nueva entrada'):", myArray)

// splice(posición, cantidad, elementosNuevos)
// - posición: dónde empezar
// - cantidad: cuántos elementos borrar
// - elementosNuevos: opcional, lo que insertamos reemplazando los eliminados
// A diferencia de slice(), splice() sí modifica el array original.

// 9. Resumen rápido

/*
 * Un array es una lista ordenada.
 * Se declara con [] o new Array().
 * Se accede por índice: array[0], array[1], ...
 * Se puede modificar, agregar, quitar y recorrer.
 * Es muy útil para guardar colecciones de datos.
 */