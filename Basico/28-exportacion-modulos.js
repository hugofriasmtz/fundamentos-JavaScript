/**
 * EXPORTACIÓN DE MÓDULOS EN JAVASCRIPT
 *
 * Un módulo es un archivo que contiene código relacionado, como funciones,
 * variables o clases. Los módulos permiten dividir un programa en varios
 * archivos y reutilizar su contenido donde sea necesario.
 *
 * Para compartir algo desde este archivo usamos `export`.
 * Otro archivo podrá utilizarlo mediante `import`.
 *
 * IMPORTANTE:
 * Para ejecutar módulos con Node.js, el proyecto debe estar configurado para
 * utilizar módulos de JavaScript, por ejemplo con `"type": "module"` en
 * `package.json`.
*/


/**
 * 1. EXPORTAR UNA FUNCIÓN
 *
 * Podemos escribir `export` delante de una función para hacerla disponible
 * en otros archivos.
*/

export function add(a, b) {
    return a + b
}


/**
 * 2. EXPORTAR PROPIEDADES
 *
 * También podemos exportar variables y constantes.
 * Otro archivo podrá leer sus valores después de importarlas.
*/

export const PI = 3.1416
export let name = "MoureDev"


/**
 * 3. EXPORTAR UNA CLASE
 *
 * Las clases también pueden compartirse entre módulos.
 * En este caso exportamos `Circle` para poder crear círculos desde otro
 * archivo.
*/

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}


/**
 * 4. EXPORTACIÓN POR DEFECTO
 *
 * Un archivo puede tener una sola exportación por defecto.
 * Al importarla, el archivo que la recibe puede elegir el nombre de la
 * variable.
 *
 * En este ejemplo, la función se exporta por defecto.
*/

export default function subtract(a, b) {
    return a - b
}


/**
 * RESUMEN
 *
 * - `export` permite compartir funciones, variables, constantes y clases.
 * - Las exportaciones con nombre deben importarse usando el mismo nombre,
 *   aunque también pueden renombrarse con `as`.
 * - Un módulo puede tener una exportación por defecto.
 * - La exportación por defecto puede importarse con cualquier nombre.
*/
