/*
 * Los nombres de variables suelen escribirse con camelCase:
 * la primera palabra empieza en minúscula y las siguientes palabras
 * empiezan con mayúscula.
 *
 * Declarar una variable es crear su nombre con var, let o const.
 * Inicializarla es darle un valor por primera vez.
 * Reasignarla es cambiar ese valor después.
 */
    
// var: forma antigua de declarar variables; actualmente no se recomienda.
var nombre = "Karen"
console.log(nombre);

// Aquí no se declara otra variable: se reasigna un nuevo valor a "nombre".
nombre = "hugo"
console.log(nombre);

// let: se usa para variables cuyo valor puede cambiar.

let pais = "México"
console.log(pais);

pais = "Colombia"
console.log(pais);

// const: se usa cuando la variable no se va a reasignar.
const ciudad = "Ciudad de México"
console.log(ciudad);

// ciudad = "Monterrey" // Error: no se puede reasignar una constante.