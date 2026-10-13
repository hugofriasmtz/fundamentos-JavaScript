// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Hámster", "Pingüino", "Quetzal"]
console.log("====Estructura de Arrays====")
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("Hipopótamo")
animales.push("Hormiga")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

let books = new Set(["Cien años de Soledad", "El Principito", "JavaScript", "Python", "MySQL and PHP"])

console.log("====Estructura de Sets====")
console.log(books)
// 5. Añade dos más. Uno de ellos repetido

books.add("Chernobyl")
books.add("El Principito")
console.log(books)
// 6. Elimina uno concreto a tu elección

books.delete("Python")
console.log(books)
// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log("====Estructura de Maps====")
console.log(months)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log("¿Existe el mes número 5?", months.has(5))
console.log("Nombre del mes número 5:", months.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("summer", ["Junio","Julio","Agosto","Septiembre"])
console.log(months)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map


let cosas = ["Libro", "Película", "Libro", "Canción"]
let cosasSet = new Set(cosas)
let cosasMap = new Map([["cosas", cosasSet]])
console.log("====Transformaciones de Estructuras====")
console.log(cosas)
console.log(cosasSet)
console.log(cosasMap)
