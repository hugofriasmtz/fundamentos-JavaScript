// 1. Crea una clase que reciba dos propiedades
class Correo {
    constructor(carta, destinatario){
        this.carta = carta
        this.destinatario = destinatario
    }

    // 2. Añade un método a la clase que utilice las propiedades
    datosEntrega(direccion){
        console.log(`Enviaremos la carta a la dirección ${direccion} en ${this.destinatario}`);
    }

    // 4. Añade un método estático a la primera clase
    static datosDestinatario(nombre, telefono){
        console.log(
          `Nombre: ${nombre}  
           Teléfono: ${telefono}`
        )
    }
}

const correo = new Correo("Hola Karen, ¿cómo estás?", "México, Iztapalapa")
console.log(correo)

// 3. Muestra los valores de las propiedades e invoca a la función
correo.datosEntrega("Col. Centro, núm. 100, 5 de Mayo")
console.log(correo.carta)
console.log(correo.destinatario)
correo.datosEntrega("Enviar a Marcos")

// 5. Haz uso del método estático
Correo.datosDestinatario("Karen J.", "4688084428")

// 6. Crea una clase que haga uso de herencia
class Paqueteria extends Correo {
    datosEntrega(){
        console.log(`La paquetería recibió el paquete y lo enviaremos a: ${this.carta}, ${this.destinatario}`)
    }
}


const paqueteria = new Paqueteria("Hola, papá", "Tehuacán, Pue.")
paqueteria.datosEntrega()

// 7. Crea una clase que haga uso de getters y setters
class Estudiante {
    #matricula
    #carrera

    constructor(nombre, telefono, matricula, carrera){
        this.#carrera = carrera
        this.#matricula = matricula
        this.nombre = nombre
        this.telefono = telefono
    }

    get datosUnicos(){
        console.log(`La matrícula de ${this.nombre} es: ${this.#matricula}`)
    }

    set cambioCarrera(correccion){
        if (correccion === this.#carrera){
            console.log("Ya perteneces a esta carrera")
        }else{
            this.#carrera = correccion
        }
    }
}

const estudiante = new Estudiante("Hugo Frias", "2342342323", "5561423-4", "SOMA")

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores
estudiante.datosUnicos
estudiante.cambioCarrera = "ADMO"

// 10. Sobrescribe un método de una clase que utilice herencia

const ups = new Paqueteria("Hugo","Veracruz")
ups.datosEntrega()