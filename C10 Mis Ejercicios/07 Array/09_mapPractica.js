// Duplica (multiplica x2) cada elemento del array de números.
// Devuelve un array con los duplicados.
// Tu código:
function duplicarElementos(array) {
  let duplicado = array.map((elemento) => elemento * 2);
  return duplicado;
}

let numeros = [1, 2, 3, 4, 5, 6];
console.log(duplicarElementos(numeros));
