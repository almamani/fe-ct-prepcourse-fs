// Busca el número pasado por argumento dentro del array.
// Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
// Si no se encuentra, retorna -1.
// Tu código:

/* function encontrarElemento(num, array) {
  array.forEach((element) => {
    if (array.includes(num)) {
      let indice = array.indexOf(element);
      return indice;
    }
  });
  return -1;
} */

function encontrarElemento(num, array) {
  if (array.includes(num)) {
    let indice = array.indexOf(num);
    return indice;
  } else {
    return -1;
  }
}

let numeros = [1, 2, 3, 4, 5];

console.log(encontrarElemento(8, numeros));
