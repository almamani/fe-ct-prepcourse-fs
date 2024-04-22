// Dados dos argumentos "a" y "b", devuelve el producto de todos
// los números entre a y b (inclusive).
// Tu código:
function productoEntreNúmeros(a, b) {
  let res = a;
  for (let index = a + 1; index <= b; index++) {
    res = res * index;
  }
  return res;
}

console.log(productoEntreNúmeros(1, 5));
