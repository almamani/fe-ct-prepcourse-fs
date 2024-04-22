// La función recibe un argumento llamado valor.
// Si este valor es null o undefined, retorna true.
// De lo contrario, retorna false.
// Por ejemplo:
// null ---> true
// undefined ---> true
// 22 ---> false
// "texto" ---> false
// Tu código:

function esNuloOIndefinido(valor) {
  if (valor === null || valor === undefined) {
    return true;
  } else {
    return false;
  }
}

let valor = "texto";
const res = esNuloOIndefinido(valor);
console.log(`El Dato ingresado ${valor} es null o undefined: ${res}`);
