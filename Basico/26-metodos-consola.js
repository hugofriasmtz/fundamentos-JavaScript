/**
 * MÉTODOS DE LA CONSOLA EN JAVASCRIPT
 *
 * La consola permite mostrar información mientras desarrollamos y probamos
 * un programa. También sirve para advertir sobre posibles problemas, medir
 * tiempos y seguir el recorrido de una función.
 *
 * IMPORTANTE:
 * Estos métodos son herramientas de desarrollo. En una aplicación real,
 * los mensajes de depuración no siempre deben quedar en producción.
*/


/**
 * 1. `console.log`
 *
 * Es el método más utilizado para mostrar valores en la consola.
 * Puede recibir texto, variables y resultados de operaciones.
*/

console.log("¡Hola, JavaScript!")

const nombre = "Hugo"
const edad = 23

console.log("Nombre:", nombre)
console.log("Edad:", edad)
console.log("El próximo año tendrá:", edad + 1)


/**
 * 2. `console.error`
 *
 * Muestra un mensaje como error. Es útil cuando una operación no se pudo
 * completar o cuando queremos señalar un problema durante la ejecución.
 *
 * `new Error(...)` crea un objeto con información sobre el error.
*/

console.error("Este es un mensaje de error.")
console.error(
    "Error al conectarse a la base de datos:",
    new Error("Conexión fallida.")
)


/**
 * 3. `console.warn`
 *
 * Muestra una advertencia. El programa puede continuar, pero conviene
 * revisar la situación que se está señalando.
*/

console.warn("Este es un mensaje de advertencia.")


/**
 * 4. `console.info`
 *
 * Muestra información adicional sobre el estado del programa.
 * En muchos navegadores puede verse de forma parecida a `console.log`.
*/

console.info("Este es un mensaje de información adicional.")


/**
 * 5. `console.table`
 *
 * Muestra arrays y objetos en forma de tabla.
 * Es útil para revisar varios datos de manera ordenada.
*/

const usuariosComoArrays = [
    ["Hugo", 37],
    ["Karen", 21]
]

console.table(usuariosComoArrays)

const usuariosComoObjetos = [
    { nombre: "Hugo", edad: 23 },
    { nombre: "Karen", edad: 23 }
]

console.table(usuariosComoObjetos)


/**
 * 6. `console.group` y `console.groupEnd`
 *
 * Permiten agrupar varios mensajes relacionados.
 * `console.group` inicia el grupo y `console.groupEnd` lo cierra.
*/

console.group("Usuario")
console.log("Nombre:", "Hugo")
console.log("Edad:", 23)
console.groupEnd()


/**
 * 7. `console.time` y `console.timeEnd`
 *
 * Sirven para medir cuánto tarda en ejecutarse un bloque de código.
 *
 * El texto utilizado en `console.time` debe ser exactamente el mismo que
 * se utilice después en `console.timeEnd`.
*/

console.time("Recorrido del bucle")

for (let i = 0; i < 10000; i++) {
    // Repetimos una operación para medir su duración.
}

console.timeEnd("Recorrido del bucle")


/**
 * 8. `console.assert`
 *
 * Comprueba si una condición es verdadera.
 * No muestra nada cuando la condición se cumple, pero muestra un mensaje
 * cuando la condición es falsa.
*/

const edadMinima = 17
console.assert(
    edadMinima >= 18,
    "El usuario debe ser mayor de edad."
)


/**
 * 9. `console.count` y `console.countReset`
 *
 * `console.count` cuenta cuántas veces se ejecuta una etiqueta.
 * `console.countReset` reinicia el contador de esa etiqueta.
*/

console.count("Click")
console.count("Click")
console.count("Click")

console.countReset("Click")
console.count("Click")


/**
 * 10. `console.trace`
 *
 * Muestra el recorrido de llamadas que llevó hasta el punto actual.
 * Es útil para saber qué funciones se ejecutaron antes de llegar a un
 * mensaje o a un problema.
*/

function funcionA() {
    funcionB()
}

function funcionB() {
    console.trace("Seguimiento de la ejecución.")
}

funcionA()


/**
 * 11. `console.clear`
 *
 * Limpia el contenido visible de la consola.
 * Se deja comentado para no borrar automáticamente los mensajes anteriores
 * cuando se ejecute este archivo.
*/

// console.clear()


/**
 * RESUMEN
 *
 * - `console.log` muestra información general.
 * - `console.error` muestra errores.
 * - `console.warn` muestra advertencias.
 * - `console.info` muestra información adicional.
 * - `console.table` organiza datos en una tabla.
 * - `console.group` agrupa mensajes.
 * - `console.time` y `console.timeEnd` miden tiempos.
 * - `console.assert` comprueba una condición.
 * - `console.count` cuenta ejecuciones.
 * - `console.trace` muestra el recorrido de funciones.
 * - `console.clear` limpia la consola.
*/
