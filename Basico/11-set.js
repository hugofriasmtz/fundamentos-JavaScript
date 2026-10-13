/**
 ** Set
 * 
 * Un Set es una colección de valores que no se repiten.
 * Un Set puede almacenar cualquier tipo de valor, ya sea primitivo o referencias a objetos.
 * Los valores de un Set son únicos, es decir, no pueden repetirse.
 * Los valores de un Set no están ordenados, es decir, no tienen un índice.
 * Los valores de un Set son iterables, es decir, se pueden recorrer con un bucle for...of.
 */
// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["hugo", "H10", "hugofrias", 23, true, "hugofrias@github.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://hugofriasmtz.github.io/my-portfolio/")

console.log(mySet)

mySet.delete("https://hugofriasmtz.github.io/my-portfolio/")

console.log(mySet)

console.log(mySet.delete("hugo"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("hugo"))
console.log(mySet.has("H10"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("hugofrias@github.com")
mySet.add("hugofrias@github.com")
mySet.add("hugofrias@github.com")
mySet.add("Hugofrias@github.com")
console.log(mySet)