//! Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

//! Funciones
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  //! Si ya sorteamos todos los numeros
  if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
  } else {
    //! Si el numero generado esta incluido en la lista
    if (listaNumeroSorteado.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSorteado.push(numeroGenerado);
      return numeroGenerado;
    }
  }


};

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
};

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del numero secreto');
  asignarTextoElemento('p', `Selecciona un numero del 1 al ${numeroMaximo}.`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  return;
};

condicionesIniciales();

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
  //! Condicional if para saber si es mayor, menor o si aserto el numero
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Aserto!, el número de intentos es de ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //! El usuario no aserto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
      asignarTextoElemento('p', 'El numero secreto es mayor');
    }

    intentos++;

    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario').value = '';
  return;
};

//! Funcion para dar vida al boton de reiniciar
function reiniciarJuego() {
  //* Limpiar la caja
  limpiarCaja();

  //* Indicar condiciones iniciales
  //* Generar numero aleatorio
  //* Inicializar el numero de intentos
  //* Indicar mensajes en pantalla iniciales
  condicionesIniciales();

  //* Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
