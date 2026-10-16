/**
 * CLASES EN JAVASCRIPT
 *
 * Una clase es una plantilla para crear objetos con propiedades y métodos.
 * Cada objeto creado a partir de una clase se llama instancia.
 *
 * Las clases permiten agrupar datos y comportamientos relacionados.
 *
 * Sintaxis general:
 *
 * class NombreDeLaClase {
 *     constructor(parametro) {
 *         this.propiedad = parametro
 *     }
 *
 *     metodo() {
 *         código que se ejecuta
 *     }
 * }
*/


/**
 * 1. CREAR UNA CLASE
 *
 * El `constructor` se ejecuta automáticamente cuando usamos `new`.
 * `this` representa la instancia que se está creando.
*/

console.log("=== 1. CREAR UNA CLASE ===")

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

const person = new Person("Hugo", 23, "hugofriasmtz")
const person2 = new Person("Hugo", 23, "hugo-dev")

console.log(person)
console.log(person2)
console.log(typeof person) // object

// Cada instancia tiene sus propios valores.
person2.name = "Hugo Frias"
console.log(person.name)
console.log(person2.name)


/**
 * 2. VALORES POR DEFECTO
 *
 * Podemos definir valores por defecto en los parámetros del constructor.
 * Se utilizan cuando no enviamos un argumento o su valor es `undefined`.
*/

console.log("\n=== 2. VALORES POR DEFECTO ===")

class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

const personWithDefaults = new DefaultPerson("Hugo", 23)
const anonymousPerson = new DefaultPerson()

console.log(personWithDefaults)
console.log(anonymousPerson)


/**
 * 3. MÉTODOS DE UNA CLASE
 *
 * Un método es una función definida dentro de una clase. Puede utilizar
 * `this` para leer o modificar las propiedades de la instancia que lo llama.
 *
 * Las instancias comparten los métodos definidos en la clase; no es necesario
 * crear una copia de la función para cada objeto.
*/

console.log("\n=== 3. MÉTODOS DE UNA CLASE ===")

class Developer {
    constructor(name, specialty) {
        this.name = name
        this.specialty = specialty
    }

    introduce() {
        return `Soy ${this.name} y me especializo en ${this.specialty}.`
    }

    learn(topic) {
        console.log(`${this.name} está aprendiendo ${topic}.`)
    }
}

const developer = new Developer("Hugo", "Backend")

console.log(developer.introduce())
developer.learn("JavaScript")


/**
 * 4. ACCEDER Y MODIFICAR PROPIEDADES
 *
 * Las propiedades de una instancia se pueden consultar con notación de
 * punto o de corchetes, igual que las propiedades de cualquier objeto.
*/

console.log("\n=== 4. ACCEDER Y MODIFICAR PROPIEDADES ===")

console.log(developer.name)
console.log(developer["specialty"])

developer.specialty = "JavaScript"
console.log(developer.introduce())


/**
 * 5. PROPIEDADES PRIVADAS
 *
 * Una propiedad cuyo nombre comienza con `#` solo puede utilizarse dentro
 * de la clase que la declara. Desde fuera no podemos leerla ni modificarla
 * directamente.
 *
 * La clase puede ofrecer métodos públicos para trabajar con esa información
 * de forma controlada.
*/

console.log("\n=== 5. PROPIEDADES PRIVADAS ===")

class PrivateDeveloper {
    #email

    constructor(name, email) {
        this.name = name
        this.#email = email
    }

    getEmailMessage() {
        return `El correo de ${this.name} es ${this.#email}.`
    }

    changeEmail(email) {
        this.#email = email
    }
}

const privateDeveloper = new PrivateDeveloper("Hugo", "hugo@example.com")

console.log(privateDeveloper.getEmailMessage())
privateDeveloper.changeEmail("hugo.dev@example.com")
console.log(privateDeveloper.getEmailMessage())

// Estas líneas producirían un error porque `#email` es privada:
// console.log(privateDeveloper.#email)
// privateDeveloper.#email = "otro@example.com"


/**
 * 6. GETTERS Y SETTERS
 *
 * Un getter permite leer una propiedad con sintaxis de propiedad, aunque
 * internamente ejecute una función.
 *
 * Un setter permite controlar y validar un cambio realizado con `=`.
 *
 * En este ejemplo, el email se guarda de forma privada y solo se modifica
 * si contiene el carácter `@`.
*/

console.log("\n=== 6. GETTERS Y SETTERS ===")

class SecureDeveloper {
    #name
    #email

    constructor(name, email) {
        this.#name = name
        this.email = email
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    set email(email) {
        if (!email.includes("@")) {
            console.log("El email no es válido.")
            return
        }

        this.#email = email
    }
}

const secureDeveloper = new SecureDeveloper("Hugo", "hugo@example.com")

console.log(secureDeveloper.name)
console.log(secureDeveloper.email)

secureDeveloper.email = "hugo.dev@example.com"
console.log(secureDeveloper.email)

secureDeveloper.email = "email-invalido"
console.log(secureDeveloper.email)


/**
 * 7. HERENCIA
 *
 * Una clase hija puede heredar propiedades y métodos de una clase padre
 * usando `extends`.
 *
 * `super` llama al constructor de la clase padre. La clase hija también
 * puede sobrescribir un método para cambiar su comportamiento.
*/

console.log("\n=== 7. HERENCIA ===")

class Animal {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`Soy ${this.name}.`)
    }

    sound() {
        console.log("El animal emite un sonido genérico.")
    }
}

class Dog extends Animal {
    sound() {
        console.log(`${this.name} dice: ¡Guau!`)
    }

    run() {
        console.log(`${this.name} corre.`)
    }
}

class Fish extends Animal {
    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log(`${this.name} nada.`)
    }
}

const dog = new Dog("HugoDog")
dog.introduce() // Método heredado
dog.sound()     // Método sobrescrito
dog.run()       // Método propio de Dog

const fish = new Fish("HugoFish", 10)
fish.introduce() // Método heredado
fish.sound()     // Método heredado
fish.swim()      // Método propio de Fish

console.log(dog instanceof Dog)    // true
console.log(dog instanceof Animal) // true
console.log(fish instanceof Dog)   // false


/**
 * 8. MÉTODOS ESTÁTICOS
 *
 * Un método estático pertenece a la clase, no a sus instancias.
 *
 * - Método de instancia: `objeto.metodo()`.
 * - Método estático: `Clase.metodo()`.
*/

console.log("\n=== 8. MÉTODOS ESTÁTICOS ===")

class MathOperations {
    sum(numberA, numberB) {
        return numberA + numberB
    }

    static multiply(numberA, numberB) {
        return numberA * numberB
    }
}

const operations = new MathOperations()

console.log(operations.sum(5, 10))              // Método de instancia
console.log(MathOperations.multiply(5, 10))     // Método estático

// Esto produciría un error porque `multiply` es estático:
// operations.multiply(5, 10)


/**
 * RESUMEN
 *
 * - Una clase es una plantilla para crear objetos.
 * - `constructor` inicializa las propiedades de cada instancia.
 * - `new` crea una instancia de una clase.
 * - `this` hace referencia a la instancia actual.
 * - Los métodos definen comportamientos para las instancias.
 * - Los campos privados con `#` solo están disponibles dentro de la clase.
 * - Los getters y setters controlan el acceso a las propiedades.
 * - `extends` permite crear una clase a partir de otra.
 * - `super` llama al constructor o a un método de la clase padre.
 * - Los métodos de instancia se llaman desde objetos.
 * - Los métodos estáticos se llaman desde la clase.
*/
