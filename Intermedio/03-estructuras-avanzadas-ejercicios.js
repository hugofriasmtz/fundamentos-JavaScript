// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección.

const calificaciones = [65, 82, 91, 74, 58, 88]
const calificacionBimestral = calificaciones.map(calfinal => calfinal / 2 )
console.log(`Calificaciones Bimestrales: ${calificacionBimestral}`)

const calificacionesMayores = calificaciones.filter(calMayor => calMayor >= 80 )
console.log(`Calificaciones mayores: ${calificacionesMayores}`)

const sumaCalificaciones = calificaciones.reduce(
    (suma, calificacion) => suma + calificacion,
    0
)

const promedioCalificaciones = sumaCalificaciones / calificaciones.length

console.log(`Promedio general: ${promedioCalificaciones.toFixed(2)}`)



// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra solo los números pares.

const numeros = [2, 3, 4, 5, 6, 7]
const numerosComplejos = numeros.filter(numero => numero % 2 === 0).map(numero => numero ** 3)
console.log(`Los números pares y elevados al cubo son: ${numerosComplejos}`)  

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección.

const departamentos = [
    ["ventas", "soporte", "marketing"],
    ["desarrollo", ["frontend", "backend"], "calidad"],
    [
        ["recursos humanos", "finanzas"],
        ["contabilidad", ["auditoría", "impuestos"]]
    ],
    ["logística", ["almacén", "transporte"], "atención al cliente"],
    [
        ["investigación", "innovación"],
        [["automatización", "datos"]]
    ]
]

let departamentosPlanos = departamentos.flat(Infinity)
console.log(departamentosPlanos);

const listaLimpia = departamentosPlanos.flatMap(depto => {
  if (depto === "atención al cliente") {
    return []
  }
  return [depto.toUpperCase()]
});

console.log(listaLimpia);


// 4. Ordena un array de números de mayor a menor.


const puntuaciones = [45, 98, 12, 76, 63, 89]
puntuaciones.sort((a,b) => b - a)
console.log(puntuaciones)


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos.
const tecnologiasFrontend = new Set(["HTML", "CSS", "JavaScript"])
const tecnologiasBackend = new Set(["JavaScript", "Node.js", "SQL"])

const union = new Set ([...tecnologiasFrontend, ...tecnologiasBackend])

const interseccionFront = new Set(
    [...tecnologiasFrontend].filter(curso => tecnologiasBackend.has(curso))
)
const interseccionBackend = new Set(
    [...tecnologiasBackend].filter(curso => tecnologiasFrontend.has(curso))
)

const diferencias = new Set(
    [...tecnologiasFrontend].filter(curso => !tecnologiasBackend.has(curso))
)

// 6. Itera los resultados del ejercicio anterior. Declara aquí las variables con los resultados que obtengas en el ejercicio 5.

union.forEach(union => console.log(`Union: ${union}`))
interseccionFront.forEach(interseccion => console.log(`Interseccion Frontend: ${interseccion}`))
interseccionBackend.forEach(interseccion => console.log(`Interseccion Backend: ${interseccion}`))
diferencias.forEach(diferencias => console.log(`Diferencias: ${diferencias}`))

// 7. Crea un Map que almacene información de usuarios (nombre, edad y email) e itera los datos.

const usuarios = new Map([
    ["usuario1", {
        nombre: "Karen",
        edad: 24,
        email: "karen@correo.com"
    }],
    ["usuario2", {
        nombre: "Felipe",
        edad: 17,
        email: "felipe@correo.com"
    }],
    ["usuario3", {
        nombre: "Marcos",
        edad: 31,
        email: "marcos@correo.com"
    }]
])

for (const usuario of usuarios.values()) {
  console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
}


// 8. Dado el Map anterior, crea un array con los nombres.

const nombres = [...usuarios.values()].map(usuario => usuario.nombre);
console.log(nombres)

// 9. Dado el Map anterior, obtén un array con los emails de los usuarios  mayores de edad y transfórmalo a un Set.

const correos = new Set ([...usuarios.values()].filter(usuario => usuario.edad >= 18).map(usuario => usuario.email))
console.log(correos)

// 10. Transforma el Map en un objeto. A continuación, transforma el objeto en un Map con el email de cada usuario como clave y todos sus datos como valor.

const usuariosObjeto = Object.fromEntries(usuarios.entries())

console.log("1. Map transformado a Objeto:")
console.log(usuariosObjeto)

const parejasNuevoMap = Object.values(usuariosObjeto).map(usuario => {
  return [usuario.email, usuario]
})

const usuariosMapPorEmail = new Map(parejasNuevoMap);

console.log("\n2. Objeto transformado a nuevo Map (con clave Email):");
console.log(usuariosMapPorEmail);