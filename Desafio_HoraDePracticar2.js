//! Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function indiceImc(pesoKiligramos, alturaMetros) {
  let imc = pesoKiligramos / (alturaMetros * alturaMetros)
  return imc;
}
let imcResultado = indiceImc(85, 1.80);
console.log(`El IMC de la persona es ${imcResultado}`);

//! Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function valorFactorial(numFactorial) {
  if (numFactorial === 0 || numFactorial === 1) {
    return 1;
  } else {
    return numFactorial * valorFactorial(numFactorial - 1);
  }
};
let numero = 5;
let resultado = valorFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//! Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversionPesoDolar(pesoColombiano) {
  let dolar = 4140.76;
  let convertir = pesoColombiano * dolar;
  return convertir;
}
let pesoColombiano = conversionPesoDolar(5);
console.log(`La conversion es de peso a dolar ${pesoColombiano}`);

//! Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function salaRectangular(altura, anchura) {
  let area = anchura * altura;
  let perimetro = 2 * (anchura + anchura);
  console.log('Area: ' + area);
  console.log('Perimetro: ' + perimetro);
}

let altura = 3;
let anchura = 8;
salaRectangular(altura, anchura);

//! Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaPerimetroCirculo(radio) {
  let pi = 3.14;
  let area = pi * radio * radio;
  let perimetro = 2 * pi * radio;
  return `El area de la sala es ${area} y el perimetro es ${perimetro}`;
}

let datos = areaPerimetroCirculo(2.5);
console.log(datos);

//! Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numMultiplicar){
  for(let i = 1; i <= 10; i++){
    let resultado = i * numMultiplicar
    return `${numMultiplicar} x ${i} = ${resultado}`;
  };
};
console.log(tablaMultiplicar(2));