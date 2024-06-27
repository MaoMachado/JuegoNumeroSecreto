//! Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
  console.log('Hola, Mundo!');
}
saludo();

//! Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function nombreParametro(nombre) {
  console.log(`Hola, ${nombre}!`);
}
nombreParametro('Mario');

//! Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numDoble(numero) {
  console.log(numero * 2);
}
numDoble(20);

//! Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioParam(num1, num2, num3){
  console.log((num1 * num2 * num3) / 3);
}

promedioParam(2, 4, 6);

//! Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numMayor(num1, num2){
  (num1 > num2) ? console.log('El numero uno es mayor') : console.log('El numero dos es mayor');
}

numMayor(7, 6);

//! Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function resultMulti(num){
  let resultado = num * num;
  console.log(resultado)  ;
}
resultMulti(6);