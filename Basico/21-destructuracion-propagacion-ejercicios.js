
const lenguajes = ["JavaScript", "Python", "Java", "C#", "Go"]
const animales = ["Perro", "Gato", "Hámster", "Pingüino", "Quetzal"]

const desarrollador = {
    nombre: "Hugo",
    edad: 23,
    especialidad: "Backend",
    pais: "México",
    contacto: {
        email: "hugo@github.com",
        ciudad: "Ciudad de México"
    }
}

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

const [js, py] = lenguajes
console.log(`
    Primer lenguaje :${js}
    Segundo leguaje: ${py}`)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [, , , , , html = "html"] = lenguajes
console.log(`Tercer lenguaje: ${html}`)
// 3. Usa desestructuración para extraer dos propiedades de un objeto

const {nombre, especialidad} = desarrollador
console.log(`Hola mi nombre es ${nombre} y me especializo en ${especialidad}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const {edad: age, pais: country} = desarrollador

console.log(`tengo ${age} años y soy de ${country}`);


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const {contacto:{email, ciudad}} = desarrollador
console.log(`Vivo en la ${ciudad}, este es mi correo: ${email}`)

// 6. Usa propagación para combinar dos arrays en uno nuevo
const fusionArray = [...lenguajes, ...animales]
console.log(`Propagacion de Arrays: ${fusionArray}`)

// 7. Usa propagación para crear una copia de un array

const copiaLenguajes = [...lenguajes]
console.log(`Copia de Lenguajes: ${copiaLenguajes}`)

// 8. Usa propagación para combinar dos objetos en uno nuevo

const datosAdicionales = {
    sexo: "Masculino",
    estatura: 1.78,
    labora: false
}
const desarrolladorCompleto = {
    ...desarrollador,
    ...datosAdicionales
}
console.log(desarrollador)
console.log(datosAdicionales)
console.log(desarrolladorCompleto)

// 9. Usa propagación para crear una copia de un objeto

const CopiaCompletaDesarrollador = {
    ...desarrolladorCompleto
}
// 10. Combina desestructuración y propagación

const fichaDev = { ...desarrolladorCompleto }

const {
    nombre: fichaNombre,
    edad: fichaEdad,
    especialidad: fichaEspecialidad,
    pais: fichaPais,
    contacto: { ciudad: fichaS, email: fichaEmail },
} = fichaDev

console.log(`
    FICHA DEL USUARIO
    -----------------
    Nombre: ${fichaNombre}
    Edad: ${fichaEdad} años
    Especialidad: ${fichaEspecialidad}
    País: ${fichaPais}
    Ciudad: ${fichaS}
    Email: ${fichaEmail}

`)