// 1. Crea una función que retorne a otra función

function crearSaludo() {
    return function () {
        return "Hola, JavaScript";
    };
}

const saludo = crearSaludo();
console.log(saludo());


// 2. Implementa una función currificada que multiplique 3 números

function multiplicarTresNumeros(numero1) {
    return function (numero2) {
        return function (numero3) {
            return numero1 * numero2 * numero3;
        };
    };
}

console.log(multiplicarTresNumeros(2)(3)(4));


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }

    return base * calcularPotencia(base, exponente - 1);
}

console.log(calcularPotencia(2, 3));


// 4. Crea una función createCounter() que reciba un valor inicial
// y retorne un objeto con métodos para increment(), decrement()
// y getValue(), utilizando un closure para mantener el estado

function createCounter(valorInicial) {
    let valor = valorInicial;

    return {
        increment() {
            valor++;
        },

        decrement() {
            valor--;
        },

        getValue() {
            return valor;
        },
    };
}

const counter = createCounter(10);

counter.increment();
counter.increment();
console.log(counter.getValue());

counter.decrement();
console.log(counter.getValue());


// 5. Crea una función sumManyTimes(multiplier, ...numbers)
// que primero sume todos los números y luego multiplique
// el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    const suma = numbers.reduce((total, number) => total + number, 0);

    return suma * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3));


// 6. Crea un Callback que se invoque con el resultado
// de la suma de todos los números que se le pasan a una función

function sumarNumeros(callback, ...numbers) {
    const suma = numbers.reduce((total, number) => total + number, 0);

    callback(suma);
}

sumarNumeros((resultado) => {
    console.log(`El resultado de la suma es: ${resultado}`);
}, 1, 2, 3, 4);


// 7. Desarrolla una función parcial

function sumar(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}

function sumarParcialmente(numero1) {
    return function (numero2, numero3) {
        return sumar(numero1, numero2, numero3);
    };
}

const sumarConDiez = sumarParcialmente(10);

console.log(sumarConDiez(5, 2));


// 8. Implementa un ejemplo que haga uso de Spread

const frutas = ["manzana", "pera"];
const masFrutas = [...frutas, "plátano", "naranja"];

console.log(masFrutas);

const persona = {
    nombre: "Hugo",
};

const personaCompleta = {
    ...persona,
    edad: 25,
};

console.log(personaCompleta);


// 9. Implementa un retorno implícito

const duplicar = (numero) => numero * 2;

console.log(duplicar(5));


// 10. Haz uso del this léxico

const usuario = {
    nombre: "Hugo",
    numeros: [1, 2, 3],

    mostrarNumeros() {
        // La función flecha mantiene el this del método mostrarNumeros()
        this.numeros.forEach((numero) => {
            console.log(`${this.nombre}: ${numero}`);
        });
    },
};

usuario.mostrarNumeros();