// Crea una variable de tipo string.
// Crea una variable de tipo number.
// Crea una variable de tipo boolean.

function esTipoDato(valor) {
  let res = typeof valor;
  /* console.log(`El tipo de dato de: ${valor} es ${res}`); */
  return res;
}

let dato = "hola";
const resultado = esTipoDato(dato);
console.log(`El tipo de dato de: ${dato} es ${resultado}`);
