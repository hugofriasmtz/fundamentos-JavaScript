/**
 * OBJETOS EN JAVASCRIPT
 *
 * Un objeto es una colección de propiedades. Cada propiedad tiene un nombre
 * (o clave) y un valor. Los valores pueden ser datos, arrays, otros objetos o
 * funciones. Cuando una función pertenece a un objeto se llama método.
 *
 * Los objetos son útiles para representar entidades y agrupar la información
 * y el comportamiento relacionados.
 *
 * En este ejemplo trabajaremos con una personaa.
*/


/**
 * 1. CREAR UN OBJETO
 *
 * La sintaxis literal usa llaves `{}` y separa las propiedades con comas.
 * La clave y el valor se separan con dos puntos.
*/

const personaa = {
    name: "Hugo",
    age: 23,
    alias: "hugofriasmtz"
}


/**
 * 2. ACCEDER A LAS PROPIEDADES
 *
 * La notación de punto es la opción más habitual cuando conocemos la clave
 * directamente. La notación de corchetes permite usar una variable como
 * clave y también acceder a propiedades cuyo nombre no sería un identificador
 * válido.
*/

console.log(personaa.name)

const property = "name"
console.log(personaa[property])


/**
 * 3. MODIFICAR, AÑADIR Y ELIMINAR PROPIEDADES
 *
 * `const` impide reasignar la variable `persona`, pero no impide modificar
 * las propiedades del objeto al que apunta.
*/

personaa.name = "Hugo Frias"
console.log(persona.name)

console.log(typeof persona.age) // number
persona.age = "23"
console.log(persona.age)
console.log(typeof persona.age) // string

// Podemos añadir una propiedad que no existía.
persona.email = "hugofrias@github.com"

// `delete` elimina una propiedad del objeto.
delete persona.age

console.log(persona)

// La propiedad se puede volver a crear con cualquier notación.
persona["age"] = 37
console.log(persona)


/**
 * 4. MÉTODOS
 *
 * Un método es una función almacenada como propiedad de un objeto. Dentro
 * de un método tradicional, `this` hace referencia al objeto que lo ejecuta.
 *
 * La sintaxis abreviada de métodos evita escribir `: function`.
*/

const personaWithMethod = {
    name: "Hugo",
    age: 23,
    walk() {
        console.log(`${this.name} camina.`)
    }
}

personaWithMethod.walk()


/**
 * 5. OBJETOS ANIDADOS
 *
 * Una propiedad puede contener otro objeto. Para acceder a una propiedad
 * anidada encadenamos la notación de punto.
*/

const personaWithJob = {
    name: "Hugo",
    age: 23,
    alias: "hugofriasmtz",
    job: {
        name: "Programador",
        experience: 1,
        work() {
            console.log(`La persona trabaja como ${this.name}.`)
        }
    }
}

console.log(personaWithJob)
console.log(personaWithJob.name)
console.log(personaWithJob.job)
console.log(personaWithJob.job.name)
personaWithJob.job.work()

// Dentro de `job`, `this` es `personaWithJob.job`, no `personaWithJob`.
console.log(`Tiene ${personaWithJob.age} años.`)


/**
 * 6. COMPARAR OBJETOS
 *
 * Los objetos se comparan por referencia, no por el contenido de sus
 * propiedades. Aunque dos objetos tengan los mismos datos, son referencias
 * diferentes si se crearon por separado.
*/

const personaCopia = {
    name: "Hugo Frias",
    alias: "hugofriasmtz",
    email: "hugofrias@github.com",
    age: 23
}

console.log(persona)
console.log(personaCopia)

console.log(persona === personaCopia) // false
console.log(persona.name === personaCopia.name) // true

// Estas dos variables apuntan al mismo objeto.
const samepersona = persona
console.log(persona === samepersona) // true


/**
 * 7. RECORRER LAS PROPIEDADES
 *
 * `for...in` recorre las claves enumerables de un objeto. Podemos usar cada
 * clave para obtener su valor mediante la notación de corchetes.
*/

for (const key in personaCopia) {
    console.log(`${key}: ${personaCopia[key]}`)
}

// `Object.keys` obtiene las claves como un array.
console.log(Object.keys(personaCopia))


/**
 * 8. CREAR OBJETOS CON UNA FUNCIÓN CONSTRUCTORA
 *
 * Una función constructora permite crear varios objetos con la misma
 * estructura usando `new`. Por convención, su nombre comienza en mayúscula.
 *
 * Actualmente, las clases suelen ser la alternativa preferida, pero esta
 * sintaxis ayuda a entender cómo funcionan los objetos creados con `new`.
*/

function persona(name, age) {
    this.name = name
    this.age = age
}

const personaFromConstructor = new persona("Karen", 23)
console.log(personaFromConstructor)
console.log(personaFromConstructor.name)
console.log(typeof personaFromConstructor) // object
console.log(typeof personaCopia) // object


/**
 * RESUMEN
 *
 * - Un objeto agrupa propiedades relacionadas.
 * - Usa `objeto.propiedad` o `objeto["propiedad"]` para acceder a un valor.
 * - Las propiedades se pueden modificar, añadir y eliminar.
 * - Una función almacenada en un objeto es un método.
 * - `this` hace referencia al objeto que ejecuta un método tradicional.
 * - Los objetos se comparan por referencia.
 * - `for...in` recorre las claves de un objeto.
 * - `new` permite crear objetos a partir de una función constructora.
*/
