let numeroSecreto = 0;
let intentos = 0;
let nuemroMaximoPosible = 100;
let listaNumero = [];



function asignarTextoElemento(Elemento, Texto){
    let elemtoHTML = document.querySelector(Elemento);
elemtoHTML.innerHTML = Texto;
return;
}

function verificarIntento(){
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
  let maximoIntentos = 10;
  if(intentos === maximoIntentos){
    asignarTextoElemento('h1', `Lo siento haz acabado ${(intentos == 1 ? 'tu' : 'tus')} ${(intentos == 1 ? 'intento' : 'intentos')}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
  if(numeroUsuario === numeroSecreto){
    asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} ` );
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if(numeroUsuario > numeroSecreto){
      asignarTextoElemento('p', 'el numero es menor');
    } else{
      asignarTextoElemento('p', 'el numero es mayor');
    } if(intentos === maximoIntentos){
      asignarTextoElemento('p', 'sigue intentando');
    }
    intentos++;
    limpiar()
  } 
  
  return;


}

function limpiar(){
  document.querySelector('#valorUsuario').value = '';
  
}
function generadorDeNumeroSecreto() {
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
  let numeroGenerado = Math.floor(Math.random()*nuemroMaximoPosible)+1;
  console.log(numeroGenerado);
  console.log(listaNumero);
   
   if(listaNumero.includes(numeroGenerado))  {
    return generadorDeNumeroSecreto();
   } else {
    listaNumero.push(numeroGenerado);
    return numeroGenerado;
   }
}


function condicionesIniciales() {
 asignarTextoElemento('h1', 'juego de el numero secreto');
  asignarTextoElemento('p', `indicame un numero de el 1 al ${nuemroMaximoPosible}`);
  intentos =1;
 numeroSecreto = generadorDeNumeroSecreto();
}
function reiniciarJuego() {
   limpiar();
  condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   return;
}


condicionesIniciales();

