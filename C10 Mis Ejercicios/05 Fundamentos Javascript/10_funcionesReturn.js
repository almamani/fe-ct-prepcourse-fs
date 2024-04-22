function totalProductos(prod1, prod2, prod3) {
  var resultado = prod1 + prod2 + prod3;
  return resultado;
}

function cobrar() {
  console.log("Lo que hay que cobrar es:", totalProductos(10, 20, 30));
}

cobrar();
