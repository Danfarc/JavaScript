class Singleton{

    static instacnia;
    nombre = '';

    constructor(nombre = '') {

        // console.log(Singleton.instacnia);
        // if (!!Singleton.instacnia)

        // const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);

        if(!!Singleton.instacnia){
            return Singleton.instacnia;
        }

        Singleton.instacnia = this;
        this.nombre = nombre;

        // return this;

    }
}

const instacnia1 = new Singleton('Iroman');
const instacnia2 = new Singleton('Spiderman');
console.log(`Nombre en la instacia1 es : ${ instacnia1.nombre}`);
console.log(`Nombre en la instacia2 es : ${ instacnia2.nombre}`);

instacnia1.nombre = 'spiderman';
console.log(`Nombre en la instacia1 es : ${ instacnia1.nombre}`);
