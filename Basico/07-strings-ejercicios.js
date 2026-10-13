// 1. Concatena dos cadenas de texto
const texto1 = "Hola"
const texto2 = "mundo"

console.log(texto1 + " " + texto2) 
console.log(texto1, texto2)


// 2. Muestra la longitud de una cadena de texto
const texto3 = "JavaScript"
console.log(texto3.length)

// 3. Muestra el primer y último carácter de un string
const texto4 = "Programación"
console.log(texto4[0])
console.log(texto4[11])


// 4. Convierte a mayúsculas y minúsculas un string
const texto5 = "Aprendiendo JavaScript"
console.log(texto5.toLocaleLowerCase())
console.log(texto5.toLocaleUpperCase())


// 5. Crea una cadena de texto en varias líneas
const texto6 = `Primera línea
Segunda línea`
console.log(texto6)


// 6. Interpola el valor de una variable en un string
const nombre = "Hugo"
const nickNane = "hugofriasmtz"
console.log(`Hola mi nombre es ${nombre} soy de México y mi GitHub es ${nickNane}.` )


// 7. Reemplaza todos los espacios en blanco de un string por guiones
const texto7 = "Este texto tiene espacios"
console.log(texto7.replaceAll(" ", "-"))


// 8. Comprueba si una cadena de texto contiene una palabra concreta
const texto8 = "Me gusta programar en JavaScript"
console.log(texto8.includes("JavaScript"))


// 9. Comprueba si dos strings son iguales
const texto9 = "Hola"
const texto10 = "Hola"
console.log(texto9 === texto10)

// 10. Comprueba si dos strings tienen la misma longitud
const texto11 = "Perro"
const texto12 = "Gatos"
console.log(texto11.length === texto12.length)



