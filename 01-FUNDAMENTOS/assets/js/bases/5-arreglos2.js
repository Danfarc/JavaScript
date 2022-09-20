let juegos = ['Zelda', 'Mario','Metroid','Chrono'];
console.log('Largos:', juegos.length);

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length -1 ]

console.log({primero, ultimo});
console.log( primero +' '+ ultimo);

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento, indice, arr});
});

juegos.forEach((nombre)=>{
    console.log({nombre})
});


let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;
let juegosBorrados = juegos.splice(pos, 1);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); // CaSeSensItIvE
console.log({metroidIndex});