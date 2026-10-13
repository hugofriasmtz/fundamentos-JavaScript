// 1. Escribe un comentario en una línea

// Hola soy Hugo y este e smi omentario en lineas

// 2. Escribe un comentario en varias líneas

/* 
  * Hola soy Hugo y tengo la intencion de aprender,
  * JavaScript, REACT, ASTRO
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nickName = "hugofriasmtz"
let age = 23 
let heigth = 1.78
let working = false
let happy= true

let winnLeage
let religion = null

let laptopBrand = Symbol("Lenovo")
let andromeda = BigInt("817239871289371986589716389471628379612983761289376129")



// 4. Imprime por consola el valor de todas las variables
console.log(nickName);
console.log(age);
console.log(heigth);
console.log(working);
console.log(happy);
console.log(winnLeage);
console.log(religion);
console.log(laptopBrand);
console.log(andromeda);


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nickName);
console.log(typeof age);
console.log(typeof heigth);
console.log(typeof working);
console.log(typeof happy);
console.log(typeof winnLeage);
console.log(typeof religion);
console.log(typeof laptopBrand);
console.log(typeof andromeda);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
// Las variables declaradas con let se reasignan sin volver a escribir let.
nickName = "Karen"
age = 24
heigth = 1.59
working = true
happy = false
winnLeage = "Admo"
religion = null
laptopBrand = Symbol("HUAWEI")
andromeda = BigInt("12345678901234567890")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

nickName = 100
age = "veinticuatro"
heigth = true
working = undefined
happy = null
winnLeage = Symbol("Admo")
religion = 123456789n
laptopBrand = "HUAWEI"
andromeda = 42

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constString = "JavaScript"
const constNumber = 2024
const constBoolean = true
const constUndefined = undefined
const constNull = null
const constSymbol = Symbol("constante")
const constBigInt = 9007199254740991n

// 9. A continuación, modifica los valores de las constantes

// constString = "Otro valor"
// constNumber = 10
// constBoolean = false
// constUndefined = "definido"
// constNull = "no es null"
// constSymbol = Symbol("otro símbolo")
// constBigInt = 1n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Todas las líneas del ejercicio 9 producen un TypeError porque las constantes no se pueden reasignar.