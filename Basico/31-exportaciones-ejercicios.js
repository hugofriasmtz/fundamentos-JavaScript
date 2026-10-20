/**
 * EXPORTACIONES PARA LOS EJERCICIOS 1, 2 Y 3
 *
 * Cada elemento utiliza una exportación con nombre. Esto permite importar
 * la función, la constante y la clase usando sus nombres originales.
*/

// 1. Exporta una función
export function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB
}

// 2. Exporta una constante
export const IVA = 0.16

// 3. Exporta una clase
export class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }
}
