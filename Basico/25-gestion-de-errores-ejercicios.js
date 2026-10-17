
// 1. Captura una excepción utilizando try-catch

const usuario = undefined

try {
    console.log(usuario.nombre)
} catch (error) {
    console.log("Excepción capturada:", error.message)
}


// 2. Captura una excepción utilizando try-catch y finally

try {
    const resultado = 10 / 2
    console.log("Resultado:", resultado)
} catch (error) {
    console.log("Error:", error.message)
} finally {
    console.log("El bloque finally siempre se ejecuta")
}


// 3. Lanza una excepción genérica

function lanzarExcepcionGenerica() {
    throw new Error("Se ha producido una excepción genérica")
}

try {
    lanzarExcepcionGenerica()
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}


// 4. Crea una excepción personalizada

class ErrorDeValidacion extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "ErrorDeValidacion"
    }
}


// 5. Lanza una excepción personalizada

function validarEdad(edad) {
    if (typeof edad !== "number") {
        throw new ErrorDeValidacion("La edad debe ser un número")
    }

    if (edad < 0) {
        throw new ErrorDeValidacion("La edad no puede ser negativa")
    }

    return true
}

try {
    validarEdad(-1)
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}


// 6. Lanza varias excepciones según una lógica definida

function validarNumero(numero) {
    if (typeof numero !== "number") {
        throw new TypeError("El valor debe ser un número")
    }

    if (numero < 0) {
        throw new RangeError("El número no puede ser negativo")
    }

    return numero
}

const numeroTexto = "10"
const numeroNegativo = -5
const numeroValido = 10

try {
    console.log("Número:", validarNumero(numeroTexto))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

try {
    console.log("Número:", validarNumero(numeroNegativo))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

try {
    console.log("Número válido:", validarNumero(numeroValido))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}


// 7. Captura varias excepciones en un mismo try-catch

try {
    validarNumero("abc")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message)
    } else if (error instanceof RangeError) {
        console.log("Error de rango:", error.message)
    } else {
        console.log("Error desconocido:", error.message)
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = ["3.14", "texto", "7.5"]

for (const valor of valores) {
    try {
        if (valor === "texto") {
            throw new Error("El texto no representa un número")
        }

        const numero = Number.parseFloat(valor)
        console.log(`${valor} -> ${numero}`)
    } catch (error) {
        console.log("Error de conversión:", error.message)
    }
}


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function comprobarPropiedad(objeto, propiedad) {
    if (objeto[propiedad] === undefined) {
        throw new ErrorDeValidacion(
            `El objeto no tiene la propiedad "${propiedad}"`
        )
    }

    return true
}

const persona = {
    nombre: "Ana",
    edad: 23
}

try {
    comprobarPropiedad(persona, "correo")
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

let intentos = 0

function reintentar() {
    let ultimoError

    for (let intento = 1; intento <= 10; intento++) {
        try {
            intentos++

            if (intentos < 3) {
                throw new Error("La operación falló")
            }

            return "Operación completada"
        } catch (error) {
            ultimoError = error
            console.log(`Intento ${intento} fallido: ${error.message}`)
        }
    }

    throw ultimoError
}

try {
    console.log(reintentar())
} catch (error) {
    console.log("No se pudo completar la operación:", error.message)
}
