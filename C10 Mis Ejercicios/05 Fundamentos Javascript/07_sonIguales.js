// La función recibe dos argumentos llamados "x" e "y".
// Retorna true si "x" e "y" son iguales.
// De lo contrario, retorna false.
// Por ejemplo:
// 5, 5 ---> true
// 5, 8 ---> false
// Tu código:

function sonIguales(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
let val1 = 8;
let val2 = 8;

res = sonIguales(val1, val2);
console.log(`Los valores ${val1} y ${val2} son iguales: ${res}`);
