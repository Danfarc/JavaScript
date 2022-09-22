const fher = {
    nombre:'Fernando',
    edad:30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre:'Pedro',
    edad:15,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
}


fher.imprimir();


// Esto se debe de crear con la palabra reservada NEW para crearla como un objeto
function Personas(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir =()=>{
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Personas('Maria', 30)
const melissa = new Personas('Melissa',35)
console.log(maria, melissa);
maria.imprimir();
melissa.imprimir();