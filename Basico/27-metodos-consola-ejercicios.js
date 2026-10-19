// 1. Crea una función que utilice error correctamente

function mostrarError(mensaje) {
    console.error(`Error: ${mensaje}`)
}

mostrarError("No se pudo guardar el producto")

// 2. Crea una función que utilice warn correctamente

function division(numeroA, numeroB) {
    if (numeroB === 0) {
        console.warn("No se puede dividir entre cero")
        return "Operación no válida"
    }

    return numeroA / numeroB
}

console.log(`Resultado: ${division(100, 0)}`)

// 3. Crea una función que utilice info correctamente

function listaDeCompras(articulo){
    const lista = ["Manzana", "Huevos"]

    if (lista.includes(articulo)){
        console.info("No podemos agregar dos veces el mismo artículo")
        return lista
    }

    console.info("Artículo agregado correctamente")
    lista.push(articulo)
    return lista
}

console.log(listaDeCompras("Manzana"))


// 4. Utiliza table

const jugadores = [
    { nombre: "Ronaldinho", nacionalidad: "Brasileña" },
    { nombre: "Zidane", nacionalidad: "Francesa" },
    { nombre: "R. Márquez", nacionalidad: "Mexicana" },
    { nombre: "Puyol", nacionalidad: "Española" }
]
console.table(jugadores)

// 5. Utiliza group

console.group("Información del equipo")
console.log("Cantidad de jugadores:", jugadores.length)
console.log("Primer jugador:", jugadores[0].nombre)
console.log("Último jugador:", jugadores[jugadores.length - 1].nombre)
console.groupEnd()

// 6. Utiliza time

console.time("Recorrido de jugadores")

for (const jugador of jugadores) {
    console.log(`Jugador: ${jugador.nombre}`)
}

console.timeEnd("Recorrido de jugadores")

// 7. Valida con assert si un número es positivo

const numero = -21
console.assert(
    numero > 0,
    `${numero} no es un número positivo`
)

// 8. Utiliza count

console.count("Visita")
console.count("Visita")
console.count("Visita")
console.countReset("Visita")
console.count("Visita")

// 9. Utiliza trace

function iniciarProceso() {
    finalizarProceso()
}

function finalizarProceso() {
    console.trace("Recorrido del proceso")
}

iniciarProceso()

// 10. Utiliza clear

// console.clear()