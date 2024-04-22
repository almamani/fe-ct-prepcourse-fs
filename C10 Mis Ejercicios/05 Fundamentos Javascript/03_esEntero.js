// La función recibe un argumento llamado numero.
// Verifica si este es un número entero o no.
// Retorna true si lo es, de lo contrario, retorna false.
// Por ejemplo:
// 24 ---> true
// -1212 ---> true
// 121.212 ---> false
// Tu código:

function esNumeroEntero(numero) {
  let respuesta = numero % 2 === 0;
  return respuesta;
}

let valor = 15;
const res = esNumeroEntero(valor);
/* console.log(`El Número ${valor} es entero: ${res}`); */

console.log(`El Número ${valor} es entero:`, esNumeroEntero(valor));
