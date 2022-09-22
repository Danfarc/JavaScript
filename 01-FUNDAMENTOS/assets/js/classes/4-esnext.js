class Rectangulo {
    
    #area = 0;

    constructor(base=0, altura=0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura
    }


    calcularArea1(){
        this.#calcularArea();
    }

    //  Metodo privado
    #calcularArea(){
        console.log(this.#area * 2);
    }

    
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;
rectangulo.calcularArea1();
console.log(rectangulo);