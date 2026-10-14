// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(num1, num2){ //solucion con function y return
    return total = num1 + num2
    // console.log(`Resultado: ${total}`)
}
console.log(`Suma con return ${sumar(20,54)}`)

const suma = (num1, num2) => num1 + num2 // solucion con arrow function 
console.log(`Suma con arrow: ${suma(12,14)}`)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numeros = [20, 37, 448, 2993, 1, 4]
function numeroMayor(numeros) {
    let mayor = numeros[0]

    for (const numero of numeros) {
        if (numero > mayor) {
            mayor = numero
        }
    }

    return mayor
}

console.log(`El numeor mayor de ${numeros} es: ${numeroMayor(numeros)}`)



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const sumaVocales = texto => {
    let cantidadVocales = 0
    const vocales = "aeiouáéíóú"

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            cantidadVocales++
        }
        
    }
    return cantidadVocales
}

console.log(`El total de vocales son: ${sumaVocales("parangaricutirimicuaro")}`)


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const palabras = ["hola", "hugo", "karen", "marcos", "mexico", "felipe"]

function palabrasMayusculas(palabras){
    let palabraMayusculas = []
    for (let i = 0; i < palabras.length; i++) {
        nuevasPalabras = palabras[i].toUpperCase()
        palabraMayusculas.push(nuevasPalabras)
        
    }
    return palabraMayusculas
}
console.log(`Palabras en Mayusculas: ${palabrasMayusculas(palabras)}`)

const mayusculas = palabras => {
    let palabraMayusculas = []
    for (let i = 0; i < palabras.length; i++) {
        nuevasPalabras = palabras[i].toUpperCase()
        palabraMayusculas.push(nuevasPalabras)
        
    }
    console.log(`arrow - Palabras en Mayusculas:${palabraMayusculas}`)
}
mayusculas(palabras)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const esPrimo = numero => {
    if (numero < 2) {
        return false
    }

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false
        }
    }

    return true
}

console.log(`¿5 es primo? ${esPrimo(5)}`)
console.log(`¿10 es primo? ${esPrimo(10)}`)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
    const comunes = []

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            comunes.push(array1[i])
        }
    }

    return comunes
}

console.log(`Elementos comunes: ${elementosComunes([1, 2, 3, 4], [3, 4, 5, 6])}`)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(numeros) {
    let suma = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i]
        }
    }

    return suma
}

console.log(`Suma de números pares: ${sumaPares([1, 2, 3, 4, 5, 6])}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numerosAlCuadrado(numeros) {
    const cuadrados = []

    for (let i = 0; i < numeros.length; i++) {
        cuadrados.push(numeros[i] * numeros[i])
    }

    return cuadrados
}

console.log(`Números al cuadrado: ${numerosAlCuadrado([1, 2, 3, 4])}`)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function palabrasEnOrdenInverso(texto) {
    const palabras = texto.split(" ")
    let textoInvertido = ""

    for (let i = palabras.length - 1; i >= 0; i--) {
        textoInvertido += palabras[i]

        if (i !== 0) {
            textoInvertido += " "
        }
    }

    return textoInvertido
}

console.log(`Texto invertido: ${palabrasEnOrdenInverso("JavaScript")}`)

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    if (numero < 0) {
        return undefined
    }

    let resultado = 1
    for (let i = 2; i <= numero; i++) {
        resultado *= i
    }

    return resultado
}

console.log(`Factorial de 5: ${factorial(5)}`)

