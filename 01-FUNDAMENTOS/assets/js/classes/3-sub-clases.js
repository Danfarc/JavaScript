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


class Heroe extends Persona{

    clan = 'sin Clan';

    constructor(nombre, codigo, frase, clan){
        // Primero el constructor del padre
        super(nombre,codigo,frase);

        this.clan = clan;
    }

    // el metodo sobre escribe el metodo del padre, pero si lo necesitamos debesmos colocar la palabre reservada super.metodo
    quienSoy(){
        console.log(`Soy ${this.nombre} , ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker','Spiderman','Soy te amigable vecino','Avanger');
// const spiderman = new Heroe();
console.log(spiderman);

spiderman.quienSoy();