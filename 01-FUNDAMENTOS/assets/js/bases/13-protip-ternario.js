const elMayor = (a,b)=>( a > b ) ? a : b ;

const tieneMenbresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares'; 

console.log(elMayor(10,15));
console.log(tieneMenbresia(true));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor': 'Loky'
];

console.log(amigosArr);

const nota = 65;
const grado =   nota >= 95 ? 'A+': 
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+':
                nota >= 80 ? 'C' :
                'F';

console.log({nota,grado});
            