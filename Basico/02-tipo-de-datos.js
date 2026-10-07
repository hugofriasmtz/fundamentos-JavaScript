// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Hugo Frias" // Comillas dobles
let alias = 'hugofrias10' // Comillas simples
let email = `hugofrias10@gmail.com` // Comillas invertidas

// Números (number)
let age = 23 // Entero
let height = 1.78 // Decimal

// Booleanos (boolean)
let isMan = true
let isWoman = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
// typeof es un operador que nos permite conocer el tipo de dato de una variable
console.log(typeof myName) 
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isMan)
console.log(typeof isWoman)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)