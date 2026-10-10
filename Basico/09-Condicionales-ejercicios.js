// if / else if / else / operador ternario

// 1. Imprime tu nombre únicamente si la variable tiene un valor.
let nombre = "Hugo"

if (nombre) {
    console.log(nombre)
} else {
    console.log("No hay un nombre que mostrar :(")
}

// 2. Imprime un mensaje si el usuario y la contraseña coinciden con los valores establecidos.
let usuarioIngresado = "hugo"
let contrasenaIngresada = "1234"
const usuarioCorrecto = "hugo"
const contrasenaCorrecta = "1234"

if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
    console.log("Usuario y contraseña correctos")
} else {
    console.log("Contraseña o usuario incorrecto")
}

// 3. Verifica si un número es positivo, negativo o igual a cero.
let numero = 0 // valores a cambiar , -1 , 0, 10
if (numero > 0) {
    console.log(`El numero ${numero} es positivo`)
}else if (numero < 0) {
 console.log(`El numero ${numero} es Negativo`)
}else{
 console.log(`El numero es Cero`)
 
}

// 4. Verifica si una persona puede votar y calcula cuántos años le faltan para cumplir 18.
let edadParaVotar = 16

if (edadParaVotar >= 18) {
    console.log("¡Felicidades, puedes votar!")
} else {
    const anosFaltantes = 18 - edadParaVotar
    console.log(`Lo siento, aún te faltan ${anosFaltantes} años para votar.`)
}


// 5. Usa el operador ternario para asignar "adulto" o "menor" dependiendo de la edad.
let edad = 23
let etapa = edad >= 18 ? "adulto" : "menor"
console.log(`La persona es: ${etapa}`);


// 6. Muestra la estación del año dependiendo del número del mes.
// Enero = 1, febrero = 2, ..., diciembre = 12.
let mes = 7;

if (mes == 1) {
    console.log(`Estamos en el mes de Enero`)
} else if (mes == 2){
    console.log(`Estamos en el mes de Febrero`)
}else if (mes == 3){
    console.log(`Estamos en el mes de Marzo`)
}else if (mes == 4){
    console.log(`Estamos en el mes de Abril`)
}else if (mes == 5){
    console.log(`Estamos en el mes de Mayo`)
}else if (mes == 6){
    console.log(`Estamos en el mes de Junio`)
}else if (mes == 7){
    console.log(`Estamos en el mes de Julio`)
}else if (mes == 8){
    console.log(`Estamos en el mes de Agosto`)
}else if (mes == 9){
    console.log(`Estamos en el mes de Septiembre`)
}else if (mes == 10){
    console.log(`Estamos en el mes de Octubre`)
}else if (mes == 11){
    console.log(`Estamos en el mes de Noviembre`)
}else if (mes == 12){
    console.log(`Estamos en el mes de Diciembre`)
}else {
    console.log(`No existe el mes , prueba del 1 al 12`)
}

// 7. Muestra cuántos días tiene el mes indicado en la variable anterior.

if (mes == 1) {
    console.log(`El mes de Enero tiene 31 Días`)
} else if (mes == 2){
    console.log(`El mes de Febrero tiene 28 Días`)
}else if (mes == 3){
    console.log(`El mes de Marzo tiene 31 Días`)
}else if (mes == 4){
    console.log(`El mes de Abril tiene 30 Días`)
}else if (mes == 5){
    console.log(`El mes de Mayo tiene 31 Días`)
}else if (mes == 6){
    console.log(`El mes de Junio tiene 30 Días`)
}else if (mes == 7){
    console.log(`El mes de Julio tiene 31 Días`)
}else if (mes == 8){
    console.log(`El mes de Agosto tiene 31 Días`)
}else if (mes == 9){
    console.log(`El mes de Septiembre tiene 30 Días`)
}else if (mes == 10){
    console.log(`El mes de Octubre tiene 31 Días`)
}else if (mes == 11){
    console.log(`El mes de Noviembre tiene 30 Días`)
}else if (mes == 12){
    console.log(`El mes de Diciembre tiene 31 Días`)
}else {
    console.log(`No existe el mes , prueba del 1 al 12`)
}
// switch

// 8. Imprime un saludo diferente dependiendo del idioma.
let idioma = "ru";
switch (idioma) {
    case "es":
        console.log(`Hola ${nombre} , un gusto saludarte`)
        break;
    case "en":
        console.log(`Hello ${nombre}, it's a pleasure to greet you.`)
        break;
    case "ru":
        console.log(`Здравствуйте, ${nombre}, рад вас приветствовать.`)
        break;
    case "jpn":
        console.log(`こんにちは、${nombre}様。ご挨拶できて光栄です。`)
        break;
    default:
        console.log("No se que idioma buscas");
        break;
}

// 9. Repite el ejercicio 6 usando switch y la variable mes.

switch (mes) {
    case 1:
        console.log(`Estamos en el mes de Enero`)
        break;
    case 2:
        console.log(`Estamos en el mes de Febrero`)
        break;
    case 3:
        console.log(`Estamos en el mes de Marzo`)
        break;
    case 4:
        console.log(`Estamos en el mes de Abril`)
        break;
    case 5:
        console.log(`Estamos en el mes de Mayo`)
        break;
    case 6:
        console.log(`Estamos en el mes de Junio`)
        break;
    case 7:
        console.log(`Estamos en el mes de Julio`)
        break;
    case 8:
        console.log(`Estamos en el mes de Agosto`)
        break;
    case 9:
        console.log(`Estamos en el mes de Septiembre`)
        break;
    case 10:
        console.log(`Estamos en el mes de Octubre`)
        break;
    case 11:
        console.log(`Estamos en el mes de Noviembre`)
        break;
    case 12:
        console.log(`Estamos en el mes de Diciembre`)
        break;

    default:
        console.log(`No existe el mes , prueba del 1 al 12`)
        break;
}

// 10. Repite el ejercicio 7 usando switch y la variable mes. 
switch (mes) {
    case 1:
        console.log(`El mes de Enero tiene 31 Días`)
        break;
    case 2:
        console.log(`El mes de Febrero tiene 28 Días`)
        break;
    case 3:
        console.log(`El mes de Marzo tiene 31 Días`)
        break;
    case 4:
        console.log(`El mes de Abril tiene 30 Días`)
        break;
    case 5:
        console.log(`El mes de Mayo tiene 31 Días`)
        break;
    case 6:
        console.log(`El mes de Junio tiene 30 Días`)
        break;
    case 7:
        console.log(`El mes de Julio tiene 31 Días`)
        break;
    case 8:
        console.log(`El mes de Agosto tiene 31 Días`)
        break;
    case 9:
        console.log(`El mes de Septiembre tiene 30 Días`)
        break;
    case 10:
        console.log(`El mes de Octubre tiene 31 Días`)
        break;
    case 11:
        console.log(`El mes de Noviembre tiene 30 Días`)
        break;
    case 12:
        console.log(`El mes de Diciembre tiene 31 Días`)
        break;

    default:
        console.log(`No existe el mes , prueba del 1 al 12`)
        break;
}