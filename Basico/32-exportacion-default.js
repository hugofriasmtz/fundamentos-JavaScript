/**
 * EXPORTACIÓN POR DEFECTO PARA LOS EJERCICIOS 7 Y 8
 *
 * Un módulo solo puede tener una exportación por defecto. Para compartir
 * varios elementos como una única exportación, los agrupamos en un objeto.
*/

function restar(numeroA, numeroB) {
    return numeroA - numeroB
}

const mensaje = "Resultado de la resta"

class Curso {
    constructor(nombre) {
        this.nombre = nombre
    }
}

export default {
    restar,
    mensaje,
    Curso
}
