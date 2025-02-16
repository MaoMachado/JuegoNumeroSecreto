//! Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let tittle = document.querySelector('h1');
tittle.innerHTML = 'Hora del desafió';

//! Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function consoleClick(){
  console.log('El botón fue clicado');
}

//! Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function nombreCiudad(){
  let ciudadUsuario = prompt('Nombra una ciudad de brasil');
  alert(`Estuve en ${ciudadUsuario} y me acorde de tí`);
}

//! Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function alerta(){
  alert('Yo amo JS');
}

//! Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma(){
  let num1 = parseInt(prompt('Digite el numero 1'));
  let num2 = parseInt(prompt('Digite el numero 2'));
  let suma = num1 + num2;

  alert(`El resultado de la suma es: ${suma}`);
}