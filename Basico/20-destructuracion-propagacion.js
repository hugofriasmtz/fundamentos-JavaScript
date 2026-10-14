/**
 * DESESTRUCTURACIÓN Y PROPAGACIÓN EN JAVASCRIPT
 *
 * La desestructuración permite extraer valores de arrays y objetos y
 * guardarlos directamente en variables.
 *
 * La propagación (spread), representada por `...`, permite expandir los
 * elementos de un array o las propiedades de un objeto dentro de otro array
 * u objeto.
 *
 * Aunque ambas usan tres puntos en algunos casos, cumplen objetivos
 * diferentes:
 *
 * - Desestructuración: extrae valores.
 * - Propagación: expande o copia valores.
*/


const numeros = [10, 20, 30, 40]

const persona = {
    nombre: "Hugo",
    edad: 23,
    alias: "hugofriasmtz"
}


/**
 * 1. DESESTRUCTURACIÓN DE ARRAYS
 *
 * Sin desestructuración tendríamos que acceder a cada posición:
*/

const primerNumero = numeros[0]
const segundoNumero = numeros[1]

console.log(primerNumero)
console.log(segundoNumero)

// La desestructuración asigna cada posición a una variable, en orden.
const [numeroUno, numeroDos, numeroTres, numeroCuatro] = numeros

console.log(numeroUno)
console.log(numeroDos)
console.log(numeroTres)
console.log(numeroCuatro)


/**
 * 2. VALORES POR DEFECTO EN ARRAYS
 *
 * Si no existe una posición, la variable recibe `undefined`. Podemos indicar
 * un valor alternativo después del signo `=`.
*/

const [primero = 0, segundo = 0, tercero = 0, cuarto = 0, quinto = 0] = numeros

console.log(primero)
console.log(cuarto)
console.log(quinto) // 0: la quinta posición no existe


/**
 * 3. OMITIR ELEMENTOS DE UN ARRAY
 *
 * Una coma sin una variable hace que esa posición se ignore. El orden no
 * cambia: `cuartaPosicion` recibe el valor que está en la posición 3.
*/

const [primeraPosicion, , , cuartaPosicion] = numeros

console.log(primeraPosicion)  // 10
console.log(cuartaPosicion) // 40


/**
 * 4. DESESTRUCTURACIÓN DE OBJETOS
 *
 * En los objetos, las variables se relacionan con el nombre de la propiedad,
 * no con su posición. Por eso el orden de las variables no es importante.
*/

const { nombre, edad, alias } = persona

console.log(nombre)
console.log(edad)
console.log(alias)


/**
 * 5. RENOMBRAR VARIABLES Y USAR VALORES POR DEFECTO
 *
 * `nombre: nombrePersona` significa: toma la propiedad `nombre` y guárdala en una
 * variable llamada `nombrePersona`.
 *
 * El valor por defecto se utiliza solo si la propiedad no existe o vale
 * `undefined`.
*/

const {
    nombre: nombrePersona,
    edad: edadPersona,
    correo = "correo@correo.com"
} = persona

console.log(nombrePersona)
console.log(edadPersona)
console.log(correo) // Se usa el valor por defecto


/**
 * 6. DESESTRUCTURACIÓN DE OBJETOS ANIDADOS
 *
 * Podemos extraer una propiedad que está dentro de otro objeto. La estructura
 * de la desestructuración debe reflejar la estructura del objeto original.
*/

const personaConTrabajo = {
    nombre: "Hugo",
    trabajo: {
        titulo: "Programador",
        experiencia: 1
    }
}

const {
    nombre: nombreTrabajador,
    trabajo: { titulo, experiencia }
} = personaConTrabajo

console.log(nombreTrabajador)
console.log(titulo)
console.log(experiencia)


/**
 * 7. PROPAGACIÓN DE ARRAYS
 *
 * `...numeros` expande los elementos del array. No inserta el array completo
 * como un único elemento.
*/

const masNumeros = [...numeros, 50, 60]

console.log(masNumeros) // [10, 20, 30, 40, 50, 60]

const copiaNumeros = [...numeros]
console.log(copiaNumeros)

// Podemos combinar varios arrays en el orden que necesitemos.
const numerosCombinados = [0, ...numeros, ...masNumeros, 70]
console.log(numerosCombinados)


/**
 * 8. COPIAR ARRAYS SIN MODIFICAR EL ORIGINAL
 *
 * La propagación crea un nuevo array. Modificar el nuevo array no modifica
 * el array original cuando sus elementos son valores simples.
*/

copiaNumeros.push(50)

console.log(numeros)      // [10, 20, 30, 40]
console.log(copiaNumeros) // [10, 20, 30, 40, 50]


/**
 * 9. PROPAGACIÓN DE OBJETOS
 *
 * `...persona` expande sus propiedades dentro de un nuevo objeto.
 *
 * Si una propiedad aparece después de la propagación, su valor reemplaza al
 * valor anterior. Esto resulta útil para crear una copia modificada.
*/

const personaActualizada = {
    ...persona,
    edad: 23,
    correo: "hugofrias@github.com"
}

console.log(persona)
console.log(personaActualizada)


/**
 * 10. COPIAR Y COMBINAR OBJETOS
 *
 * La propagación permite copiar un objeto y combinar propiedades de varios
 * objetos. Las propiedades posteriores tienen prioridad si se repiten.
*/

const copiaPersona = { ...persona }
const contacto = {
    correo: "hugofrias@github.com",
    pais: "México"
}

const personaCompleta = {
    ...copiaPersona,
    ...contacto
}

console.log(copiaPersona)
console.log(personaCompleta)

// Es una copia distinta, aunque tenga las mismas propiedades y valores.
console.log(persona === copiaPersona) // false


/**
 * 11. PROPAGACIÓN SUPERFICIAL
 *
 * La copia con `...` es superficial (shallow). Las propiedades primitivas se
 * copian, pero un objeto anidado conserva la misma referencia interna.
*/

const personaConDireccion = {
    ...persona,
    direccion: {
        ciudad: "Tehuacán"
    }
}

const copiaDireccionPersona = { ...personaConDireccion }
copiaDireccionPersona.direccion.ciudad = "Veracruz"

console.log(personaConDireccion.direccion.ciudad) // Veracruz

// Para copiar también el objeto anidado debemos propagarlo por separado.
const copiaDireccionIndependiente = {
    ...personaConDireccion,
    direccion: {
        ...personaConDireccion.direccion,
        ciudad: "Ciudad de México"
    }
}

copiaDireccionIndependiente.direccion.ciudad = "Querétaro"
console.log(personaConDireccion.direccion.ciudad)       // Veracruz
console.log(copiaDireccionIndependiente.direccion.ciudad) // Querétaro


/**
 * RESUMEN
 *
 * - La desestructuración extrae valores de arrays y objetos.
 * - En arrays, la extracción respeta las posiciones.
 * - En objetos, la extracción utiliza los nombres de las propiedades.
 * - Podemos renombrar variables y definir valores por defecto.
 * - `...` expande arrays y propiedades de objetos.
 * - La propagación permite copiar y combinar arrays y objetos.
 * - La propagación de objetos y arrays realiza copias superficiales.
 * - Las propiedades posteriores sobrescriben las anteriores.
*/
