/**
 * GESTIÓN DE ERRORES EN JAVASCRIPT
 *
 * Un error aparece cuando el programa no puede continuar una operación.
 * Gestionar un error significa anticipar el problema y decidir qué debe
 * ocurrir en lugar de permitir que el programa se detenga inesperadamente.
 *
 * JavaScript permite:
 * - Intentar una operación con `try`.
 * - Reaccionar ante un error con `catch`.
 * - Ejecutar una acción final con `finally`.
 * - Indicar un problema con `throw`.
 * - Crear errores personalizados para casos concretos.
*/


/**
 * 1. ¿QUÉ OCURRE CUANDO SE PRODUCE UN ERROR?
 *
 * `undefined` significa que una variable no tiene un objeto asignado.
 * Por eso JavaScript no puede buscar la propiedad `email` dentro de ella.
 *
 * La siguiente línea está comentada porque produciría un error y detendría
 * la ejecución del archivo:
*/

const usuarioSinDatos = undefined

// console.log(usuarioSinDatos.email) // TypeError


/**
 * 2. EVITAR QUE EL PROGRAMA SE DETENGA CON `try...catch`
 *
 * `try` contiene la operación que podría fallar.
 * Si falla, `catch` recibe el control y permite mostrar un mensaje útil.
 *
 * La instrucción posterior al error dentro de `try` no se ejecuta, pero el
 * programa continúa después del bloque `catch`.
*/

try {
    console.log(usuarioSinDatos.email)
    console.log("Este mensaje no aparece")
} catch {
    console.log("No se pudo obtener el correo del usuario")
}

console.log("El programa continúa después del error")


/**
 * 3. CONOCER EL TIPO Y EL MENSAJE DEL ERROR
 *
 * `catch (error)` guarda el error en una variable para poder analizarlo.
 *
 * - `error.name` indica el tipo de error.
 * - `error.message` explica qué ocurrió.
*/

try {
    console.log(usuarioSinDatos.email)
} catch (error) {
    console.log("Tipo:", error.name)
    console.log("Mensaje:", error.message)
}


/**
 * 4. CONVERTIR TEXTO A JSON
 *
 * `JSON.parse` convierte un texto con formato JSON en un objeto.
 * Si el texto no tiene un formato válido, lanza un `SyntaxError`.
 *
 * `try...catch` permite informar del problema sin detener la aplicación.
*/

const textoValido = '{"nombre": "Hugo", "edad": 23}'
const textoInvalido = '{"nombre": "Hugo", "edad": 23'

try {
    const usuario = JSON.parse(textoValido)
    console.log(`Usuario leído: ${usuario.nombre}`)
} catch (error) {
    console.log("El texto no contiene un JSON válido:", error.message)
}

try {
    JSON.parse(textoInvalido)
} catch (error) {
    console.log("No se pudo leer el JSON:", error.name)
}


/**
 * 5. USAR `finally`
 *
 * `finally` se ejecuta tanto si la operación funciona como si falla.
 * Es útil para indicar que una tarea terminó o para liberar recursos.
*/

function buscarUsuario(id) {
    if (id !== 1) {
        throw new Error("El usuario no existe")
    }

    return { id: 1, nombre: "Hugo" }
}

console.log("Iniciando búsqueda...")

try {
    const usuarioEncontrado = buscarUsuario(2)
    console.log(usuarioEncontrado)
} catch (error) {
    console.log("Búsqueda fallida:", error.message)
} finally {
    console.log("La búsqueda terminó")
}


/**
 * 6. LANZAR UN ERROR CON `throw`
 *
 * Una función puede detectar que recibió un dato inválido y lanzar un error
 * con `throw`. La función que la llama decide si quiere capturarlo.
*/

function retirarDinero(saldo, cantidad) {
    if (typeof cantidad !== "number") {
        throw new TypeError("La cantidad debe ser un número")
    }

    if (cantidad <= 0) {
        throw new Error("La cantidad debe ser mayor que cero")
    }

    if (cantidad > saldo) {
        throw new Error("No hay saldo suficiente")
    }

    return saldo - cantidad
}

try {
    const saldoRestante = retirarDinero(100, 30)
    console.log(`Saldo restante: ${saldoRestante}`)
    // retirarDinero(100, 150) // Error: no hay saldo suficiente
    // retirarDinero(100, "30") // TypeError: debe ser un número
} catch (error) {
    console.log("No se pudo retirar el dinero:", error.message)
}


/**
 * 7. VALIDAR DATOS ANTES DE GUARDARLOS
 *
 * No todos los problemas son errores del lenguaje. A veces el código funciona,
 * pero el dato no cumple las reglas de la aplicación.
 *
 * En este ejemplo, una edad negativa es un valor inválido, por lo que la
 * función lanza un error antes de devolver el resultado.
*/

function registrarEdad(edad) {
    if (typeof edad !== "number") {
        throw new TypeError("La edad debe ser un número")
    }

    if (edad < 0 || edad > 120) {
        throw new RangeError("La edad debe estar entre 0 y 120")
    }

    return `Edad registrada: ${edad}`
}

try {
    console.log(registrarEdad(23))
    // console.log(registrarEdad(-5)) // RangeError
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Dato incorrecto:", error.message)
    } else if (error instanceof RangeError) {
        console.log("Valor fuera de rango:", error.message)
    }
}


/**
 * 8. CREAR UN ERROR PERSONALIZADO
 *
 * Una clase de error personalizada extiende `Error`.
 * Es útil cuando una regla del programa merece un nombre propio.
*/

class SaldoInsuficienteError extends Error {
    constructor(saldo, cantidad) {
        super("El saldo no es suficiente para realizar el retiro")
        this.name = "SaldoInsuficienteError"
        this.saldo = saldo
        this.cantidad = cantidad
    }
}

function retirarDineroConErrorPersonalizado(saldo, cantidad) {
    if (cantidad > saldo) {
        throw new SaldoInsuficienteError(saldo, cantidad)
    }

    return saldo - cantidad
}

try {
    retirarDineroConErrorPersonalizado(50, 80)
} catch (error) {
    if (error instanceof SaldoInsuficienteError) {
        console.log(error.message)
        console.log(`Saldo disponible: ${error.saldo}`)
        console.log(`Cantidad solicitada: ${error.cantidad}`)
    }
}


/**
 * 9. DIFERENCIAR VARIOS TIPOS DE ERROR
 *
 * `instanceof` permite ejecutar una respuesta diferente según el tipo
 * de error recibido. Primero se revisan los tipos más específicos y después
 * el tipo general `Error`.
*/

try {
    registrarEdad("veintitrés")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message)
    } else if (error instanceof RangeError) {
        console.log("Error de rango:", error.message)
    } else {
        console.log("Error no previsto:", error.message)
    }
}


/**
 * RESUMEN
 *
 * - `try` contiene código que podría fallar.
 * - `catch` permite responder al error y continuar el programa.
 * - `finally` se ejecuta siempre.
 * - `throw` permite detener una operación porque los datos no son válidos.
 * - `TypeError` indica un tipo de dato incorrecto.
 * - `RangeError` indica un valor fuera del rango permitido.
 * - `SyntaxError` puede aparecer al analizar un texto con formato inválido.
 * - `instanceof` permite identificar el tipo de error.
 * - Los errores personalizados representan reglas propias de la aplicación.
*/
