function crearPersona(nombre, apellido) {
    // return{
    //     nombre: nombre,
    //     apellido: apellido
    // }

    return{
        nombre,
        apellido
    }
};

const crearPersona2 = (nombre, apellido)=> ({nombre,apellido}) ;

const persona = crearPersona('fernando', 'herrera');
const persona2 = crearPersona2('fernando', 'herrera');

console.log(persona, persona2);

function printArguments(){
    console.log(arguments);
}

const printArguments2 = (edad,...arguments)=>{
    //console.log(arguments);
    return arguments
} 

printArguments(10,true,'Daniel');
const argumentos = printArguments2(10,true,'Daniel');
console.log(argumentos[0]);

const [casado, vivo, nombre, saludo] = printArguments2(10, true, false,'Fernando','Hola')
console.log({casado, vivo, nombre, saludo});


const { apellido: nuevoApellido} = crearPersona('Fernando','Herrera');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};


// const printPropiedades =(personaje)=>{
//     console.log('nombre', personaje.nombre);
//     console.log('codName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

const printPropiedades =({nombre, codeName, vivo, edad=15, trajes})=>{

    // edad = edad || 0;
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}



printPropiedades(tony);