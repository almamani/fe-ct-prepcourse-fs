//Ejercicios del 1 al 5 de arreglos

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido.
  // Tu código:
  return array.length;
}

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let ultimo = array.length - 1;
  return array[ultimo];
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
}
function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
}

let numeros = [20, 30, 40, 50, 60, 70, 80, 90];
console.log("El array es:", numeros);
/*console.log("El largo del array números es:", obtenerLargoDelArray(numeros));
console.log(
  "El primer elemento del array nros es:",
  devolverPrimerElemento(numeros)
);
console.log(
  "El último elemento del array nros es:",
  devolverUltimoElemento(numeros)
); */

console.log("Agregamos 100 al final del array");
agregarItemAlFinalDelArray(numeros, 100);
console.log(numeros);

console.log("Agregamos 10 al inicio del array");
agregarItemAlComienzoDelArray(numeros, 10);
console.log(numeros);
