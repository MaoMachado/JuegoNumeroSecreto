//! Crea una lista vacía llamada "listaGenerica".
const listaGenerica = [];

//! Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
const languagesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python']
console.log(languagesDeProgramacion);

//! Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
languagesDeProgramacion.push('Java');
languagesDeProgramacion.push('Ruby');
languagesDeProgramacion.push('GoLang');
console.log(languagesDeProgramacion);

//! Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista() {
  for (let i = 0; i < languagesDeProgramacion.length; i++) {
  }
  return languagesDeProgramacion;
};
console.log(mostrarLista());

//! Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa() {
  for (let i = languagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(languagesDeProgramacion[i]);
  }
};
mostrarListaInversa();

//! Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(lista) {
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  };

  return suma / lista.length;
};
let numeros = [10, 20, 30, 40, 50];
let media = promedioLista(numeros);
console.log('Media', media);

//! Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numMinMax(lista) {
  let mayor = [];
  let menor = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = mayor[i];
    } else if (lista[i] < menor) {
      menor = menor[i];
    };
  };

  console.log('Mayor', mayor);
  console.log('Menor', menor);
};

numeros = [5, 20, 30, 8, 15, 13];
numMinMax(numeros);

//! Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(lista) {
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  };

  return suma
};

arrayNumeros = [2, 10, 15, 20];
let sumArrayNums = sumaLista(arrayNumeros);
console.log('Suma del array', sumArrayNums);

//! Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarElemento(index, elemento) {
  for (let i = 0; i < index.length; i++) {
    if (index[i] == elemento) {
      return i;
    }
  }

  return -1;
}

arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(encontrarElemento(arrayNumeros, 3));

//! Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumDosArrays(array1, array2) {
  let arraySum = [];

  for (let i = 0; i < array1.length; i++) {
    arraySum.push(array1[i] + array2[i]);
  }

  return `La suma de los dos arrays es de ${arraySum}`;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

console.log(sumDosArrays(array1, array2));

//! Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function arrayCuadrado(array) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] ** 2);
  }

  return `El cuadrado de la nueva lista: ${newArray}`;
}

let arrayMultiplicada = [2, 4, 6, 8, 10];
console.log(arrayCuadrado(arrayMultiplicada));