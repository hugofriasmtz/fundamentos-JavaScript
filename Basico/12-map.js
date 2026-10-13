/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map() // inicialización vacía

console.log(myMap)

// Inicialiación

myMap = new Map([  // inicialización con valores
    ["name", "Hugo"],
    ["email", "hugofrias@github.com"],
    ["age", 23]
])

console.log(myMap)

// Métodos y propiedades

// .set() añade un nuevo elemento al Map, o actualiza el valor de un elemento existente con la misma clave.
myMap.set("alias", "hugofrias") 
myMap.set("name", "Hugo Frias")

console.log(myMap)

// .get() devuelve el valor asociado a la clave especificada.

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// .has() devuelve un booleano que indica si un elemento con la clave especificada existe o no en el Map.

console.log(myMap.has("surname"))
console.log(myMap.has("age"))



myMap.delete("email") // .delete() elimina el elemento del Map por la clave especificada.

console.log(myMap)

/* 
 * .keys() devuelve un iterador con las claves del Map.
 * .values() devuelve un iterador con los valores del Map.
 * .entries() devuelve un iterador con los pares clave/valor del Map.
*/ 
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())



console.log(myMap.size) // .size devuelve el número de elementos en el Map.



myMap.clear() // .clear() elimina todos los elementos del Map.

console.log(myMap)


