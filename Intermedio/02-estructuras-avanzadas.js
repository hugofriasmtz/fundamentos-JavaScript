/**
 ** ESTRUCTURAS AVANZADAS EN JAVASCRIPT
 * 
 * 1. ARRAYS AVANZADOS
 *
 * Un array almacena varios valores en un orden determinado. JavaScript
 * proporciona métodos para recorrerlo, transformarlo, buscar elementos y
 * obtener nuevos resultados.
 *
 * En los métodos que reciben una función, esa función se ejecuta una vez
 * por cada elemento del array. Normalmente se escribe como una función flecha.
*/

/**
 * 1.1 MÉTODOS FUNCIONALES
 *
 * `forEach` ejecuta una función por cada elemento. Sirve para realizar una
 * acción, como mostrar datos o actualizar otra variable, pero no crea ni
 * devuelve un nuevo array.
 *
 * Sintaxis:
 * `array.forEach(elemento => { acción })`
*/

const nombres = ["Hugo", "Karen", "Felipe"]
nombres.forEach(nombre => console.log(`Hola, ${nombre}`))

/**
 * `map` transforma cada elemento y devuelve un nuevo array con los
 * resultados. La función debe devolver el valor transformado. El array
 * original permanece sin cambios.
 *
 * Sintaxis:
 * `const nuevoArray = array.map(elemento => transformación)`
*/

const precios = [100, 250, 80]
const preciosConIva = precios.map(precio => precio * 1.16)
console.log(preciosConIva)

/**
 * `filter` devuelve un nuevo array con los elementos para los que la función
 * devuelve `true`. La condición no modifica el array original. Si ningún
 * elemento cumple, devuelve un array vacío.
 *
 * Sintaxis:
 * `const filtrados = array.filter(elemento => condición)`
*/

const edades = [12, 19, 25, 16, 31]
const mayoresDeEdad = edades.filter(edad => edad >= 18)
console.log(mayoresDeEdad)

/**
 * `reduce` recorre el array y combina todos sus elementos en un único
 * resultado, por ejemplo una suma, un promedio o un objeto agrupado.
 * La función recibe el acumulador y el elemento actual. El segundo
 * argumento (`0`) es el valor inicial del acumulador.
 *
 * Sintaxis:
 * `const resultado = array.reduce((acumulador, elemento) => nuevoValor, inicial)`
*/

const ventas = [120, 80, 250, 50]
const totalVentas = ventas.reduce((total, venta) => total + venta, 0)
console.log(totalVentas)


/**
 * 1.2 MANIPULACIÓN DE ARRAYS
 *
 * `flat` elimina niveles de anidación y devuelve un nuevo array. Recibe la
 * profundidad que se desea aplanar; por defecto (`flat()`) solo elimina un
 * nivel. El array original no cambia.
*/

const categorias = ["libros", ["peliculas", "series"], [["musica"]]]
console.log(categorias.flat(1))
console.log(categorias.flat(2))

/**
 * `flatMap` aplica una transformación y aplana un nivel en una sola
 * operación. Es útil cuando cada elemento produce un array y queremos unir
 * todos esos resultados.
 *
 * Es equivalente a usar `map()` y después `flat(1)`.
*/

const cursos = ["JavaScript básico", "JavaScript avanzado"]
const palabrasDeCursos = cursos.flatMap(curso => curso.split(" "))
console.log(palabrasDeCursos)


/**
 * 1.3 ORDENACIÓN
 *
 * `sort` ordena el array original y devuelve ese mismo array. Para números
 * se debe proporcionar una función comparadora, porque sin ella se ordenan
 * como texto: por ejemplo, `12` podría aparecer después de `100`.
 *
 * La comparación `(a, b) => a - b` ordena de menor a mayor. Para invertir
 * el orden se puede usar `(a, b) => b - a`.
*/

const alumnos = ["Felipe", "Arturo", "Aldo"]
alumnos.sort()
console.log(alumnos)

const puntuaciones = [75, 12, 94, 43]
puntuaciones.sort((a, b) => a - b)
console.log(puntuaciones)

/**
 * `reverse` invierte el orden del array original y devuelve ese mismo array.
 * No recibe una función de comparación ni crea una copia automáticamente.
 * Si no quieres modificar el array original, copia primero con `[...array]`.
*/

const pasos = ["primero", "segundo", "tercero"]
pasos.reverse()
console.log(pasos)


/**
 * 1.4 BÚSQUEDA
 *
 * `includes` devuelve `true` si el array contiene el valor indicado y
 * `false` en caso contrario. Compara los valores directamente y distingue
 * entre mayúsculas y minúsculas cuando se utiliza con strings.
*/

const permisos = ["leer", "escribir"]
console.log(permisos.includes("leer"))
console.log(permisos.includes("eliminar"))

/**
 * `find` ejecuta una condición sobre cada elemento y devuelve el primer
 * elemento que la cumple. Si no encuentra ninguno, devuelve `undefined`.
 * Es útil cuando buscamos el objeto completo, no solo su posición.
*/

const productos = [
    { nombre: "Teclado", stock: 0 },
    { nombre: "Monitor", stock: 4 },
    { nombre: "Mouse", stock: 8 }
]
const primerProductoDisponible = productos.find(producto => producto.stock > 0)
console.log(primerProductoDisponible)

/**
 * `findIndex` ejecuta una condición sobre cada elemento y devuelve la
 * posición del primero que la cumple. Si no encuentra ninguno, devuelve
 * `-1`. Es útil cuando necesitamos saber dónde está el elemento.
*/

const tareas = [
    { titulo: "Leer", completada: true },
    { titulo: "Practicar", completada: false },
    { titulo: "Repasar", completada: false }
]
const indicePrimeraTareaPendiente = tareas.findIndex(tarea => !tarea.completada)
console.log(indicePrimeraTareaPendiente)


/**
 * 2. SETS AVANZADOS
 *
 * Un `Set` almacena valores únicos. Si se añade varias veces el mismo valor,
 * solo conserva una aparición. Se crea con `new Set(iterable)` y permite
 * consultar pertenencia con `has`, añadir con `add` y eliminar con `delete`.
 *
 * Un Set no utiliza índices como un array, por lo que se recorre con
 * `forEach` o `for...of`.
*/

/**
 * 2.1 ELIMINAR DUPLICADOS
 *
 * Al pasar el array a `new Set`, se eliminan los valores repetidos. Después,
 * el operador spread (`...`) convierte el Set resultante nuevamente en un
 * array.
*/

const etiquetas = ["js", "web", "js", "frontend", "web"]
const etiquetasUnicas = [...new Set(etiquetas)]
console.log(etiquetasUnicas)

/**
 * 2.2 OPERACIONES ENTRE SETS
 *
 * La unión reúne los valores de ambos conjuntos. El operador spread extrae
 * sus valores y el nuevo Set elimina automáticamente los repetidos.
*/

const cursosFrontend = new Set(["HTML", "CSS", "JavaScript"])
const cursosBackend = new Set(["JavaScript", "Node.js", "SQL"])
const union = new Set([...cursosFrontend, ...cursosBackend])
console.log(union)

/**
 * La intersección conserva los valores que existen en ambos conjuntos.
 * Primero convertimos un Set a array para poder usar `filter` y, por cada
 * elemento, `has` comprueba si también existe en el otro Set.
*/

const intersection = new Set(
    [...cursosFrontend].filter(curso => cursosBackend.has(curso))
)
console.log(intersection)

/**
 * La diferencia conserva los valores de `cursosFrontend` que no aparecen en
 * `cursosBackend`. El operador `!` invierte el resultado de `has`.
*/

const difference = new Set(
    [...cursosFrontend].filter(curso => !cursosBackend.has(curso))
)
console.log(difference)


/**
 * 2.3 CONVERSIÓN E ITERACIÓN
 *
 * El spread convierte un Set en array cuando necesitamos trabajar con
 * métodos de arrays o mostrar su contenido como una lista.
 * `forEach` permite ejecutar una acción por cada valor del Set.
*/

const colores = new Set(["rojo", "verde", "azul"])
console.log([...colores])
colores.forEach(color => console.log(`Color: ${color}`))


/**
 * 3. MAPS AVANZADOS
 *
 * Un `Map` almacena pares clave-valor. Se crea con pares dentro de
 * `new Map([[clave, valor]])`. A diferencia de un objeto, sus claves pueden
 * ser de cualquier tipo y conserva el orden de inserción.
 *
 * Sus operaciones principales son `set(clave, valor)`, `get(clave)`,
 * `has(clave)` y `delete(clave)`.
*/

const inventario = new Map([
    ["teclados", 12],
    ["monitores", 5],
    ["ratones", 20]
])

/**
 * `forEach` recibe primero el valor y después la clave, al contrario del
 * orden habitual de un par `[clave, valor]`.
*/

inventario.forEach((cantidad, producto) => {
    console.log(`${producto}: ${cantidad}`)
})


/**
 * 3.1 CONVERSIÓN DE MAPS
 *
 * `Array.from` convierte un Map en un array de pares `[clave, valor]`.
 * Esto permite utilizar métodos de arrays o recorrer los datos por posición.
*/

const contactos = new Map([
    ["Ana", "555-0101"],
    ["Bruno", "555-0102"]
])
const arrayFromMap = Array.from(contactos)
console.log(arrayFromMap)

/**
 * `Object.fromEntries` convierte los pares de un Map en propiedades de un
 * objeto. Las claves del Map deben ser adecuadas para usarse como
 * propiedades del objeto.
*/

const configuracionMap = new Map([
    ["tema", "oscuro"],
    ["idioma", "es"]
])
const objectFromMap = Object.fromEntries(configuracionMap)
console.log(objectFromMap)

/**
 * `Object.entries` obtiene un array de pares `[clave, valor]` de un objeto.
 * Esos pares se pueden entregar al constructor de `Map` para hacer la
 * conversión inversa.
*/

const usuario = {
    nombre: "Hugo",
    activo: true
}
const mapFromObject = new Map(Object.entries(usuario))
console.log(mapFromObject)


/**
 * RESUMEN
 *
 * - `forEach` ejecuta una acción por cada elemento.
 * - `map` transforma cada elemento y devuelve un nuevo array.
 * - `filter` conserva los elementos que cumplen una condición.
 * - `reduce` combina los elementos en un único resultado.
 * - `flat` y `flatMap` trabajan con arrays anidados.
 * - `sort` y `reverse` modifican el array original.
 * - `includes`, `find` y `findIndex` permiten buscar valores.
 * - `Set` almacena valores únicos y permite operaciones de conjuntos.
 * - `Map` almacena pares clave-valor y puede convertirse a otras
 *   estructuras.
 */
