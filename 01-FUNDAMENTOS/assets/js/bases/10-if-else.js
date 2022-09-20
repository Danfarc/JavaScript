let a = 5;
if(a >= 10){
    console.log('A es mayor a 10');
}else{
    console.log('A es menos a 10');
}

console.log('Fin de Programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({hoy, dia});

if (dia === 0){
    console.log('Domingo');
}else{
    console.log('No es Domingo');
}

if (dia === 0){
    console.log('Domingo');
}else if(dia === 1){
    console.log('No es Domingo');
}else{
    console.log('No es Domingo');
}

dia = 3;

// Arreglos
const diasLetras =['Domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
// Objeto
const diasLetrasO = {
    0:'Domingo',
    1:'lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado'
};
console.log(diasLetras[dia]);
console.log(diasLetrasO[dia] || 'Dia no definido');
