

// 1. Exporta una función
import {
    multiplicar,
    IVA,
    Libro
} from "./32-exportaciones-ejercicios.js"


// 2. Exporta una constante
// La constante `IVA` está exportada desde el mismo módulo.


// 3. Exporta una clase
// La clase `Libro` también está exportada desde el mismo módulo.


// 4. Importa una función
console.log("Multiplicación:", multiplicar(5, 3))


// 5. Importa una constante
console.log("IVA:", IVA)


// 6. Importa una clase
const libro = new Libro("JavaScript básico", "Hugo")
console.log("Libro:", libro.titulo)
console.log("Autor:", libro.autor)


// 7. Exporta una función, una constante y una clase por defecto
// Un archivo solo puede tener una exportación por defecto. Por eso se
// exportan los tres elementos dentro de un mismo objeto.
import contenidoDefault from "./32-exportacion-default.js"


// 8. Importa una función, una constante y una clase por defecto
const resultadoResta = contenidoDefault.restar(10, 4)
const mensaje = `${contenidoDefault.mensaje}: ${resultadoResta}`
const curso = new contenidoDefault.Curso("JavaScript")

console.log(mensaje)
console.log("Curso:", curso.nombre)


// 9. Exporta una función, una constante y una clase desde una carpeta
// Los elementos se exportan desde `modulos-extra/exportaciones.js`.
import {
    saludar,
    AUTOR,
    Usuario
} from "./modulos-extra/exportaciones.js"



// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
// La ruta `./modulos-extra/` indica que el archivo está dentro de otra
// carpeta distinta a la carpeta donde se encuentra este archivo.
console.log(saludar("Hugo"))
console.log("Autor:", AUTOR)

const usuario = new Usuario("Hugo", "hugo@correo.com")
console.log("Usuario:", usuario.nombre)
console.log("Correo:", usuario.correo)
