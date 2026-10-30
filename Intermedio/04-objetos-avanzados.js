/**
 * OBJETOS AVANZADOS EN JAVASCRIPT
 *
 * Los objetos pueden heredar propiedades y métodos de otros objetos mediante
 * su prototipo. JavaScript utiliza esta cadena de prototipos para buscar una
 * propiedad cuando no existe directamente en el objeto.
 *
 * En este archivo veremos:
 * - Prototipos y herencia entre objetos.
 * - Métodos definidos en el prototipo de una función constructora.
 * - `Object.assign` para combinar objetos.
 * - `Object.keys`, `Object.values` y `Object.entries`.
*/


/**
 * 1. PROTOTIPOS
 *
 * Cada objeto tiene un prototipo interno del que puede heredar propiedades y
 * métodos. Si una propiedad no existe en el objeto, JavaScript la busca en su
 * prototipo y continúa por la cadena hasta encontrarla o llegar a `null`.
 *
 * `__proto__` permite consultar el prototipo, aunque es una propiedad
 * heredada con fines históricos. `Object.getPrototypeOf` es la forma
 * recomendada para realizar esta consulta.
*/

let person = {
    name: "Hugo",
    age: 23,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

// Los objetos también pueden recibir nuevos métodos después de crearse.
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()


/**
 * 2. HERENCIA ENTRE OBJETOS
 *
 * `Object.create(objeto)` crea un nuevo objeto cuyo prototipo es el objeto
 * indicado. El nuevo objeto puede tener propiedades propias y también acceder
 * a las propiedades y métodos heredados.
 *
 * Si modificamos una propiedad directamente en el objeto hijo, se crea o
 * actualiza una propiedad propia y no se modifica la propiedad del prototipo.
*/

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "hugofrias10"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()


/**
 * 3. MÉTODOS DE INSTANCIA Y PROTOTIPO
 *
 * Una función constructora permite crear objetos con `new`. Las propiedades
 * asignadas con `this` son propias de cada instancia.
 *
 * Cuando añadimos un método a `Person.prototype`, todas las instancias pueden
 * utilizarlo sin crear una copia independiente de la función para cada una.
 * El método sigue teniendo acceso a la instancia mediante `this`.
*/

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Hugo", 23)
newPerson.greet()


/**
 * 4. COMBINAR OBJETOS CON `Object.assign`
 *
 * `Object.assign(destino, ...origenes)` copia las propiedades enumerables de
 * uno o varios objetos de origen en el objeto destino.
 *
 * El método devuelve el objeto destino y, en este caso, añade las propiedades
 * de `personDetails` directamente a `personCore`.
 *
 * La copia es superficial: si una propiedad contiene otro objeto, la
 * referencia interna se comparte.
*/

let personCore = { name: "Hugo" }
let personDetails = { age: 23, alias: "hugofrias10" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)


/**
 * 5. OBTENER CLAVES, VALORES Y ENTRADAS
 *
 * Estos métodos estáticos de `Object` convierten la información enumerable
 * propia del objeto en arrays:
 *
 * - `Object.keys(objeto)`: devuelve las claves.
 * - `Object.values(objeto)`: devuelve los valores.
 * - `Object.entries(objeto)`: devuelve pares `[clave, valor]`.
*/

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))


/**
 * RESUMEN
 *
 * - El prototipo permite reutilizar propiedades y métodos entre objetos.
 * - `Object.getPrototypeOf` permite consultar el prototipo de un objeto.
 * - `Object.create` crea un objeto que hereda de otro.
 * - Una propiedad propia tiene prioridad sobre una propiedad heredada.
 * - Los métodos en `prototype` se comparten entre las instancias.
 * - `Object.assign` combina propiedades en un objeto destino.
 * - `Object.keys` obtiene claves, `Object.values` valores y `Object.entries`
 *   pares de clave y valor.
 * - Las copias realizadas por `Object.assign` son superficiales.
*/
