/**
 * IMPORTACIÓN DE MÓDULOS EN JAVASCRIPT
 *
 * La importación permite utilizar en este archivo funciones, variables y
 * clases que fueron exportadas desde otro módulo.
 *
 * Usaremos los elementos del archivo:
 * `28-exportacion-modulos.js`
*/


/**
 * 1. IMPORTAR ELEMENTOS CON NOMBRE
 *
 * Las llaves indican que estamos importando exportaciones específicas.
 * Los nombres deben coincidir con los nombres exportados.
*/

import { add, PI, name, Circle } from "./28-exportacion-modulos.js"


/**
 * 2. IMPORTAR UNA FUNCIÓN
 *
 * `add` fue exportada desde el otro archivo y ahora podemos ejecutarla
 * como si estuviera definida aquí.
*/

console.log("Resultado de la suma:", add(5, 10))


/**
 * 3. IMPORTAR PROPIEDADES
 *
 * `PI` y `name` también fueron exportadas y podemos consultar sus valores.
*/

console.log("Valor de PI:", PI)
console.log("Nombre:", name)


/**
 * 4. IMPORTAR Y UTILIZAR UNA CLASE
 *
 * Al importar `Circle`, podemos crear una instancia y utilizar sus métodos.
*/

const circle = new Circle(10)

console.log("Radio:", circle.radius)
console.log("Área:", circle.area().toFixed(2))
console.log("Perímetro:", circle.perimeter().toFixed(2))


/**
 * 5. IMPORTAR LA EXPORTACIÓN POR DEFECTO
 *
 * La función `subtract` fue exportada por defecto. No usamos llaves y
 * podemos elegir el nombre `subtract` para utilizarla en este archivo.
*/

import subtract from "./28-exportacion-modulos.js"

console.log("Resultado de la resta:", subtract(10, 5))


/**
 * RESUMEN
 *
 * - `import { nombre }` importa una exportación con nombre.
 * - `import nombre` importa la exportación por defecto.
 * - La ruta indica desde qué archivo se obtiene el contenido.
 * - `./` significa que el módulo está en la misma carpeta.
 * - Después de importar un elemento podemos utilizarlo como cualquier
 *   función, variable o clase.
*/
