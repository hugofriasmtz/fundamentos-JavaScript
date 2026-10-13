// 1. Crea una variable para cada operación aritmética

const numero = 10
console.log("======Operadores Aritmeticos======")
console.log(numero - 5)
console.log(numero + 5)
console.log(numero * 5)
console.log(numero / 5)
console.log(numero % 5)
console.log(numero ** 5)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let aumento = 2
console.log("======Operadores de Asignacion======")
console.log(aumento -= 5)
console.log(aumento += 5)
console.log(aumento *= 5)
console.log(aumento /= 5)
console.log(aumento %= 5)
console.log(aumento **= 5)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("======Operadores de Comparacion (True)======")
console.log(numero != aumento)
console.log(numero === 10)
console.log(numero < aumento)
console.log(numero >= -1)
console.log(numero <= aumento)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let x = ""
console.log("======Operadores de Comparacion (False)======")
console.log(numero === x)
console.log(numero === 1)
console.log(x > aumento)
console.log(x === 0 )
console.log("Hola" == x)


// 5. Utiliza el operador lógico and
const a = 2
const b = 3
const c = 5
const d = 10

console.log("======Operadores Logicos (AND)======")
console.log(a > 0 && c < d) // true
console.log(a > b && c > d) // false


// 6. Utiliza el operador lógico or
console.log("======Operadores Logicos (OR)======")
console.log(a == b || c < d)


// 7. Combina ambos operadores lógicos
console.log("======Operadores Logicos (AND Y OR)======")
console.log(a == b || c < d &&  a >= 0) 


// 8. Añade alguna negación
console.log("======Operadores Logicos (!)======")
console.log(!(a == b || c < d &&  a >= 0)) 

// 9. Utiliza el operador ternario
console.log("======Operadores Ternario======")

let hombre = "Hombre"
let nacionalidad = hombre != "Mujer" ? "Mexicano" : "Mexicana"
console.log(nacionalidad)

    
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("======Combinacion de Operadores======")

let suma = a + b
let resta = d - c

console.log(suma >= resta || a + b == c && a * c == d )
