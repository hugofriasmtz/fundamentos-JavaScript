/**
 * FUNCIONES EN JAVASCRIPT
 *
 * Una función es un bloque de código reutilizable que realiza una tarea.
 * Podemos crearla una vez y ejecutarla todas las veces que necesitemos.
 *
 * Una función puede:
 * - Recibir datos mediante parámetros.
 * - Procesar esos datos.
 * - Devolver un resultado con `return`.
 *
 * Sintaxis general:
 *
 * function nombreDeLaFuncion(parametro1, parametro2) {
 *     código que se ejecuta
 *     return resultado
 * }
 *
 * Recomendación:
 * Usa nombres descriptivos y procura que cada función tenga una
 * responsabilidad clara.
*/


/**
 * 1. DECLARAR Y EJECUTAR UNA FUNCIÓN
 *
 * Declarar una función no la ejecuta. Para ejecutarla, debemos escribir su
 * nombre seguido de paréntesis: `mostrarMensaje()`.
*/

function mostrarMensaje() {
    console.log("¡Hola desde una función!")
}

mostrarMensaje()
mostrarMensaje()


/**
 * 2. PARÁMETROS Y ARGUMENTOS
 *
 * Un parámetro es la variable que aparece en la declaración de la función.
 * Un argumento es el valor concreto que enviamos al ejecutarla.
 *
 * En este ejemplo, `nombre` es el parámetro y `"Hugo"` es el argumento.
*/

function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`)
}

saludar("Hugo")
saludar("JavaScript")

// Una función puede recibir más de un parámetro.
function presentarPersona(nombre, edad) {
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)
}

presentarPersona("Hugo", 23)


/**
 * 3. VALORES POR DEFECTO
 *
 * Si no enviamos un argumento, su valor será `undefined`. Un valor por
 * defecto evita resultados inesperados cuando el argumento se omite o es
 * `undefined`.
 *
 * `null` es un valor diferente: indica que se ha enviado explícitamente
 * un valor vacío y no activa el valor por defecto.
*/

function saludarConIdioma(nombre = "persona", idioma = "español") {
    if (idioma === "inglés") {
        console.log(`Hello, ${nombre}!`)
    } else {
        console.log(`¡Hola, ${nombre}!`)
    }
}

saludarConIdioma()
saludarConIdioma("Hugo", "español")
saludarConIdioma("Hugo", "inglés")

function mostrarNombre(nombre = "persona") {
    console.log(nombre)
}

mostrarNombre()          // persona
mostrarNombre(undefined) // persona
mostrarNombre(null)      // null


/**
 * 4. DEVOLVER RESULTADOS CON `return`
 *
 * `return` entrega un valor a quien llamó a la función y termina su
 * ejecución. El resultado se puede guardar en una variable o usar
 * directamente en otra expresión.
 *
 * `console.log` muestra un valor, pero no lo devuelve para poder reutilizarlo.
 * Si una función no tiene `return`, devuelve automáticamente `undefined`.
*/

function sumar(numeroA, numeroB) {
    return numeroA + numeroB
}

const resultadoSuma = sumar(5, 10)
console.log(`La suma es: ${resultadoSuma}`)
console.log(`La siguiente suma es: ${sumar(2, 3)}`)

function mostrarSuma(numeroA, numeroB) {
    console.log(numeroA + numeroB)
}

function devolverSuma(numeroA, numeroB) {
    return numeroA + numeroB
}

mostrarSuma(2, 3)
const sumaReutilizable = devolverSuma(2, 3)
console.log(`La suma duplicada es: ${sumaReutilizable * 2}`)

function mostrarMensajeSinRetorno() {
    console.log("Este mensaje se muestra, pero la función no devuelve el texto.")
}

const valorDevuelto = mostrarMensajeSinRetorno()
console.log(valorDevuelto) // undefined

function calcularAreaRectangulo(base, altura) {
    return base * altura
}

const area = calcularAreaRectangulo(8, 4)
console.log(`El área del rectángulo es: ${area}`)


/**
 * 5. VALIDAR DATOS ANTES DE PROCESARLOS
 *
 * Una función puede tomar decisiones y devolver resultados distintos según
 * los datos recibidos.
*/

function esMayorDeEdad(edad) {
    return edad >= 18
}

console.log(esMayorDeEdad(23)) // true
console.log(esMayorDeEdad(15)) // false

function obtenerMensajeEdad(edad) {
    if (edad >= 18) {
        return "Es mayor de edad."
    }

    return "Es menor de edad."
}

console.log(obtenerMensajeEdad(23))
console.log(obtenerMensajeEdad(15))


/**
 * 6. EXPRESIONES DE FUNCIÓN
 *
 * También podemos guardar una función dentro de una variable. Esta forma
 * se llama expresión de función. Como usamos `const`, la variable no puede
 * reasignarse después.
*/

const multiplicar = function (numeroA, numeroB) {
    return numeroA * numeroB
}

console.log(`La multiplicación es: ${multiplicar(4, 3)}`)


/**
 * 7. ARROW FUNCTIONS
 *
 * Las funciones flecha son una sintaxis más corta para escribir funciones.
 *
 * Si solo hay un parámetro, los paréntesis son opcionales.
 * Si el cuerpo tiene una sola expresión, el `return` también es implícito.
 *
 * Nota: además de tener una sintaxis diferente, las funciones flecha tienen
 * algunas diferencias de comportamiento con las funciones tradicionales,
 * especialmente con `this`. Ese tema se verá al estudiar objetos.
*/

const dividir = (numeroA, numeroB) => {
    return numeroA / numeroB
}

const cuadrado = numero => numero * numero

console.log(`La división es: ${dividir(10, 2)}`)
console.log(`El cuadrado es: ${cuadrado(5)}`)

// Si la función no recibe parámetros, los paréntesis son obligatorios.
const mostrarCurso = () => console.log("Curso de fundamentos de JavaScript")
mostrarCurso()


/**
 * 8. ALCANCE (SCOPE)
 *
 * Una variable declarada dentro de una función solo existe dentro de ella.
 * Desde fuera no podemos acceder a una variable local. Las variables
 * declaradas con `let` y `const` también tienen alcance de bloque.
*/

function demostrarAlcance() {
    const mensajeLocal = "Solo existe dentro de la función."
    console.log(mensajeLocal)
}

demostrarAlcance()
// `mensajeLocal` produciría un error porque está fuera de su alcance.

if (true) {
    const mensajeDelBloque = "Solo existe dentro de este bloque."
    console.log(mensajeDelBloque)
}

// `mensajeDelBloque` produciría un error porque está fuera del bloque.


/**
 * 9. FUNCIONES ANIDADAS
 *
 * Una función también puede declararse dentro de otra. La función interna
 * solo está disponible dentro del alcance de la función externa.
*/

function iniciarSesion(usuario) {
    function mostrarUsuario() {
        return `Sesión iniciada para ${usuario}.`
    }

    return mostrarUsuario()
}

console.log(iniciarSesion("Hugo"))


/**
 * 10. FUNCIONES COMO ARGUMENTOS (CALLBACKS)
 *
 * En JavaScript, una función puede recibirse como argumento de otra función.
 * A la función que se recibe para ejecutarla después se le llama callback.
*/

function ejecutarOperacion(numeroA, numeroB, operacion) {
    return operacion(numeroA, numeroB)
}

const resultadoSumaConCallback = ejecutarOperacion(6, 2, sumar)
const resultadoRestaConCallback = ejecutarOperacion(6, 2, (a, b) => a - b)

console.log(`Suma: ${resultadoSumaConCallback}`)
console.log(`Resta: ${resultadoRestaConCallback}`)


/**
 * 11. FUNCIONES DE ARRAYS
 *
 * Métodos como `forEach`, `map`, `filter` y `find` reciben funciones callback.
 * Son una forma clara de trabajar con colecciones. Cada método tiene un
 * propósito y un valor de retorno diferente:
 *
 * - `forEach` ejecuta una acción y devuelve `undefined`; no crea otro array.
 * - `map` devuelve un nuevo array transformado con la misma cantidad de
 *   elementos.
 * - `filter` devuelve un nuevo array con los elementos que cumplen una
 *   condición.
 * - `find` devuelve el primer elemento encontrado o `undefined`.
*/

const numeros = [1, 2, 3, 4, 5]

// `forEach` ejecuta una función una vez por cada elemento.
numeros.forEach(numero => {
    console.log(`Número: ${numero}`)
})

// `map` crea un nuevo array transformando cada elemento.
const numerosAlCuadrado = numeros.map(numero => numero * numero)
console.log(numerosAlCuadrado)

// `filter` crea un nuevo array con los elementos que cumplen una condición.
const numerosPares = numeros.filter(numero => numero % 2 === 0)
console.log(numerosPares)

// `find` devuelve el primer elemento que cumple una condición.
const primerNumeroMayorQueTres = numeros.find(numero => numero > 3)
console.log(primerNumeroMayorQueTres)

const resultadoForEach = numeros.forEach(numero => numero * 2)
console.log(resultadoForEach) // undefined


/**
 * RESUMEN
 *
  * - Declara una función con `function` y ejecútala usando `()`.
  * - Usa parámetros para recibir datos.
  * - Usa `return` para devolver resultados reutilizables.
  * - Usa valores por defecto para cubrir argumentos omitidos.
  * - Las expresiones de función y las arrow functions son formas alternativas
  *   de crear funciones.
  * - Una función puede recibir otra función como argumento.
  * - Los métodos `forEach`, `map`, `filter` y `find` trabajan con callbacks.
 */
