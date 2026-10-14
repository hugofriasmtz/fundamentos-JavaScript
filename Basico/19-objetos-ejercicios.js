// 1. Crea un objeto con 3 propiedades
const desarrollador = {
    nombre: "Hugo",
    lenguaje: "JavaScript",
    edad: 23
}

// 2. Accede y muestra su valor
console.log(`Nombre del Dev: ${desarrollador.nombre}`)
console.log(`Lenguaje que utiliza el Dev: ${desarrollador.lenguaje}`)
console.log(`Edad del Dev: ${desarrollador.edad}`)

// 3. Agrega una nueva propiedad
desarrollador.nacionalidad = "Mexicana"
console.log(desarrollador)

// 4. Elimina una de las 3 primeras propiedades

delete desarrollador.lenguaje
console.log(desarrollador)

// 5. Agrega una función e invócala
const frase = frase => console.log(`Ya es Domingo ${frase}`);
desarrollador.frase = frase
console.log(desarrollador)
desarrollador.frase("Vamos a jugar Fútbol")


// 6. Itera las propiedades del objeto

for (const key in desarrollador){
    console.log(`${key}: ${desarrollador[key]}`)
}

// 7. Crea un objeto anidado

const futbolista = {
    nombre: "Ronaldinho",
    nacionalidad: "Brasileña",
    edad: 23,
    biografia: {
        nombre: "Ronaldo de Asis Moreira",
        ciudad: "Porto Alegre",
        apodos: ["Dinho","Roni","Brujo","La alegria del Futbol"]
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(`Nombre: ${futbolista.biografia.nombre}`);
console.log(`Ciudad de nacimiento: ${futbolista.biografia.ciudad}`);
console.log(`Apodos: ${futbolista.biografia.apodos}`);


// 9. Comprueba si los dos objetos creados son iguales
// Los objetos se comparan por referencia, por eso el resultado es false.

console.log(desarrollador === futbolista) // false

// 10. Comprueba si dos propiedades diferentes son iguales
// Comparamos una propiedad de cada objeto.

console.log(desarrollador.edad === futbolista.edad) // true