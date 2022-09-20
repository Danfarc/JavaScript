function saludar(){
    console.log('Hola mundo');
    return 1;

    // No se ejecuta despues de retorno
    console.log('no se ejecuta');
}

//let saludar = 123;

saludar();
saludar();
saludar();


// Funcion Anonima
const saludar2 = function(){
    console.log('Hola Mundo');
}

// Argumentos
function saludar3(nombre){
console.log(arguments);
console.log('Hola '+ nombre);
}

saludar3('Fernando',40, true);


// Landa Function

const saludarFlecha = (nombre)=> {
    console.log('Hola Flecha ' + nombre);
}

saludarFlecha('Daniel');

const retornoDeSaludar = saludar();
console.log(retornoDeSaludar);





function sumar(a, b){
    return a+b;
}

console.log(sumar(1,3));


const sumar2 = (a, b)=>{
    return a + b 
}



function getAleatorio(){
    return Math.random();
}

//  Funcion flecha sin llaves

const getAleatorioFelcha = ()=>  Math.random() 


console.log(getAleatorio(), getAleatorioFelcha());