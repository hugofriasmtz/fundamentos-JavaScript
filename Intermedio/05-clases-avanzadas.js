/**
 * CLASES AVANZADAS EN JAVASCRIPT
 *
 * Las clases permiten crear objetos con propiedades y métodos relacionados.
 * Además de la creación y herencia básica, JavaScript permite aplicar
 * patrones y mecanismos avanzados para controlar cómo se comportan las
 * instancias.
 *
 * En este archivo veremos:
 * - Métodos de instancia y clases abstractas.
 * - Polimorfismo y mixins.
 * - El patrón Singleton.
 * - `Symbol`, `instanceof` y `Object.create`.
 * - `Proxy` para interceptar operaciones sobre objetos.
*/


/**
 * 1. MÉTODOS DE INSTANCIA
 *
 * Un método de instancia pertenece a los objetos creados a partir de una
 * clase. Puede acceder a las propiedades de la instancia mediante `this`.
 *
 * También podemos añadir una función directamente a una instancia después
 * de crearla. En ese caso, el método solo estará disponible en ese objeto.
*/

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Hugo", 23)
person.greet()

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()


/**
 * 2. ABSTRACCIÓN
 *
 * La abstracción oculta detalles de implementación y define una estructura
 * común para las clases hijas.
 *
 * JavaScript no tiene una palabra reservada `abstract`, pero podemos impedir
 * que una clase base se instancie comprobando `new.target`. También podemos
 * obligar a las subclases a implementar ciertos métodos lanzando un error
 * desde la implementación base.
*/

class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error: `Animal` representa una abstracción y no se puede instanciar.
// const animal = new Animal("Hugo")
// console.log(animal)


/**
 * 3. POLIMORFISMO
 *
 * El polimorfismo permite que distintas clases respondan al mismo método de
 * maneras diferentes. `Cat` y `Dog` heredan de `Animal`, pero cada una
 * implementa `makeSound` con su propio comportamiento.
*/

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("HugoCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("HugoDog")
console.log(dog)
dog.makeSound()


/**
 * 4. MIXINS
 *
 * Un mixin es un objeto que contiene métodos reutilizables. No se utiliza
 * como una clase base, sino que sus métodos se copian al prototipo de otras
 * clases.
 *
 * `Object.assign` permite añadir los métodos de `FlyMixin` a los prototipos
 * de `Bird` y `Dragon`. Por eso sus instancias pueden utilizar `fly`.
*/

const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }

class Dragon extends Animal { }

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("HugoBird")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("HugoDragon")

console.log(dragon.name)
dragon.fly()


/**
 * 5. PATRÓN SINGLETON
 *
 * El patrón Singleton garantiza que una clase tenga una única instancia.
 * Antes de crear un objeto nuevo, el constructor comprueba si ya existe una
 * instancia guardada en `Session.instance`.
 *
 * Si existe, el constructor devuelve esa misma instancia. Por ello, las
 * variables `session1`, `session2` y `session3` apuntan al mismo objeto.
*/

class Session {

    constructor(name) {
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Hugo")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("hugofriasmtz10")
console.log(session3.name)
console.log(session2 === session3)


/**
 * 6. `SYMBOL`
 *
 * `Symbol` crea valores primitivos únicos. Aunque dos símbolos tengan la
 * misma descripción, no son iguales entre sí.
 *
 * Una propiedad cuyo nombre es un símbolo no aparece al acceder con una
 * cadena de texto como `"ID"`. En este ejemplo, el identificador solo puede
 * consultarse mediante el símbolo `ID` o mediante el método `getId`.
*/

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

const user = new User("Hugo")
console.log(user.name)
console.log(user.ID)
console.log(user.getId())


/**
 * 7. `INSTANCEOF`
 *
 * El operador `instanceof` comprueba si el prototipo de una clase aparece en
 * la cadena de prototipos de un objeto.
 *
 * Devuelve `true` cuando el objeto fue creado con esa clase o cuando hereda
 * de ella. No comprueba únicamente el contenido del objeto.
*/

class Car { }

const car = new Car()

console.log(car instanceof Car)


/**
 * 8. CREAR OBJETOS CON `Object.create`
 *
 * `Object.create(prototype)` crea un objeto nuevo usando el valor indicado
 * como prototipo, sin ejecutar el constructor de la clase.
 *
 * En este caso, el prototipo de `anotherCar` es `Car.prototype`, por lo que
 * `instanceof Car` devuelve `true` aunque no se haya utilizado `new Car()`.
*/

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)


/**
 * 9. PROXY
 *
 * Un `Proxy` envuelve un objeto y permite interceptar operaciones sobre él.
 * El objeto de configuración, llamado handler, define métodos como `get` y
 * `set`.
 *
 * En este ejemplo:
 * - `get` muestra un mensaje cada vez que se consulta una propiedad.
 * - `set` impide asignar un saldo negativo y guarda los valores válidos.
*/

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

// Error: el Proxy rechaza los saldos negativos.
// account.balance = -10


/**
 * RESUMEN
 *
 * - Los métodos de instancia trabajan con los datos de cada objeto.
 * - La abstracción define una estructura común y oculta detalles.
 * - El polimorfismo permite implementar el mismo método de varias formas.
 * - Los mixins reutilizan métodos entre clases mediante sus prototipos.
 * - El patrón Singleton limita una clase a una única instancia.
 * - `Symbol` crea claves únicas para propiedades.
 * - `instanceof` comprueba la cadena de prototipos de un objeto.
 * - `Object.create` crea objetos con un prototipo específico.
 * - `Proxy` intercepta operaciones como leer y modificar propiedades.
*/
