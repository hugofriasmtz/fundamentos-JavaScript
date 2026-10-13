// 1. Crea un bucle que imprima los números del 1 al 20
let number = 0

console.log("====Números del 1 al 20====")
while (number < 20) {
    number++
    console.log(number)
}

for (let i = 1; i <= 20; i++) {
   
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log("====Suma de los números del 1 al 100====")
let numSum = 0
for (let index = 0; index <= 100; index++ ) {
    numSum += index
}
console.log(`la suma total es ${numSum}`)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log("====Números pares del 1 al 50====")
let numerosPares = []
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    numerosPares.push(i);
  }
}

console.log(`Números pares: ${numerosPares}`)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

console.log("====Nombres del array====")
const nombres = ["Hugo", "Karen", "Marcos", "Felipe", "Cesar", "Eduardo"]

for (let i = 0; i < nombres.length; i++) {
    console.log(`Hola, ${nombres[i]}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("====Contar vocales en una cadena de texto====")

const texto = "JavaScript es un lenguaje de programación"
let cantidadVocales = 0
const vocales = "aeiouáéíóú"

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i].toLowerCase())) {
    cantidadVocales++
  }
}
console.log(`la palabra "${texto}" tiene ${cantidadVocales} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("====Multiplicar todos los números de un array====")
const numeros = [2, 3, 4, 5]
let producto = 1

for (let i = 0; i < numeros.length; i++) {
  producto *= numeros[i]
}

console.log(`El producto total es ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("====Tabla de multiplicar del 5====")
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("====Invertir una cadena de texto====")
const cadena = "JavaScript"
let cadenaInvertida = ""

for (let i = cadena.length - 1; i >= 0; i--) {
  cadenaInvertida += cadena[i]
}

console.log(`Cadena "${cadena}" invertida: ${cadenaInvertida}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

console.log("====Primeros 10 números de Fibonacci====")
let fibonacci = [0, 1]

for (let i = 2; i < 10; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
}

console.log(`Los primeros 10 números de Fibonacci son: ${fibonacci}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10| 
console.log("====Números mayores a 10 de un array====")
const numerosArray = [4, 12, 7, 18, 10, 25, 3]
const mayoresDeDiez = []

for (let i = 0; i < numerosArray.length; i++) {
  if (numerosArray[i] > 10) {
    mayoresDeDiez.push(numerosArray[i])
  }
}

console.log(`Números mayores a 10: ${mayoresDeDiez}`)