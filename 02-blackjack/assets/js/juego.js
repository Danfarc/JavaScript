/**
 *  2C = two of clubs (Treboles)
 *  2D = two of diamons (Diamantes)
 *  2H = two of hearts (Corazones)
 *  2S = two of spades (Espadas)
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales =['A','J','Q','K'];

let puntosJudador = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
// console.log(btnPedir);

const crearDeck = () => {
    for(let i = 2 ; i <= 10 ; i ++){

        for( let tipo of tipos ){
            deck.push( i + tipo);
        }      
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }

    // console.log(deck);

    deck = _.shuffle(deck);

    console.log(deck);

    return deck;
}

crearDeck();

// Esta funcion me permite tomar una carta

const pedirCarta = ()=>{

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    // console.log(deck);
    // console.log(carta);
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {

    // const valor = carta[0];
    const valor = carta.substring(0, carta.length -1);

    return (isNaN(valor))? 
                (valor==='A')? 11 : 10 
                : valor * 1;
    // let puntos = 0;

    // if(isNaN(valor)){
    //     // console.log('No es un numero');
    //     puntos = (valor === 'A')? 11 : 10 ;
    // }else{
    //     // console.log('Es un numero');
    //     puntos = valor * 1;
    // }

    // // Morado es un numero y gris es un string

    // console.log({puntos});
    // return valor;
}

//////////// TURNO DE LA COMPUTADORA

const turnoComputadora = (puntosMinimos)=>{

    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta); 
        puntosHTML[1].innerText = puntosComputadora;
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        // imgCarta.classList = 'cartas';
        imgCarta.classList.add('cartas');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana :( ');
        }else if (puntosMinimos > 21){
            alert('Computadora Gana');
        }else if (puntosComputadora > 21){
            alert('Jugador Gana')
        }else{
            alert('Computadora Gana')
        }
    }, 100);

    

}


// const valor = valorCarta(pedirCarta());
// console.log({valor});

btnPedir.addEventListener('click',()=>{
// console.log('Click');
    const carta = pedirCarta();
    puntosJudador = puntosJudador + valorCarta(carta);

    puntosHTML[0].innerText = puntosJudador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    // imgCarta.classList = 'cartas';
    imgCarta.classList.add('cartas');
    divCartasJugador.append(imgCarta);
    // console.log({carta,puntosJudador});

    if(puntosJudador > 21 ){
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJudador);
    }else if(puntosJudador === 21){
        console.warn('21, Genial'); 
        btnDetener.disabled = true;
        turnoComputadora(puntosJudador);
    }
});

btnDetener.addEventListener('click',()=>{

    btnDetener.disabled = true;
    btnPedir.disabled   = true;

    turnoComputadora(puntosJudador);
});


btnNuevo.addEventListener('click',()=>{

    console.clear();

    deck = [];
    deck = crearDeck();
    puntosComputadora = 0;
    puntosJudador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerHTML ='';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});

// TODO: Borrar

