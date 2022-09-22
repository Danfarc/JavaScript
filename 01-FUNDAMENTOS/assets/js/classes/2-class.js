class Persona {

    // Propiedades y Metodos estaticos
    static _conteo = 0;

    static get getConteo (){
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Soy un metodo estatico');
    }

    // Propiedades de la Clase
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Constructor (  Argunmentos  )
    constructor(nombre = 'Sin nombre', codigo= 'Sin Codigo', frase = 'Sin frase'){
        // console.log('Hola');
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;
    }

    // SETs y GETs

    set setComidadFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de  ${this.nombre} es ${this.comida}`;
    }



    // Metodo
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

    // Privado

}


const spiderman = new Persona('Peter Parker','Spiderman','Soy te amigable vecino');
const iroman = new Persona('Tony Stark','Iroman','Soy Iroman');
// spiderman.quienSoy();
spiderman.miFrase();
// iroman.quienSoy();
spiderman.setComidadFavorita = 'El pie de cereza de la tia May';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo estatico:', Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();