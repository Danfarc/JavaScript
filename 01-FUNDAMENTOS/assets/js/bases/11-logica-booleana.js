const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);

console.log('==============');
console.log(regresaFalse() && regresaTrue()); // Se ejecuta el primier condicional y si es falso ya no ejecuta o valida lo otro
console.log(regresaTrue() && regresaFalse());

console.log('====== AND && ========');
regresaTrue() && regresaFalse()


console.log('====== OR || ========');
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());

 

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const soyTrue = true;


const a1 = true && 'Hola Mundo' && 123;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo' || true;

console.log({a1, a2 , a3, a4, a5});