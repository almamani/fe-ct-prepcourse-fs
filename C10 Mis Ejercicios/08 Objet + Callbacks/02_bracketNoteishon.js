/* var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"] };

console.log(atuendos);

atuendos["piernas"] = ["Bermudas", "Pantalones"];

console.log(atuendos); */

var comidas = {};
var cargarTipoComidas = function (propUno, propDos) {
  comidas[propUno] = ["Frutas", "Vegetales"];
  comidas[propDos] = ["Hamburguesa", "Papas Fritas"];
};

cargarTipoComidas("saludable", "noSaludable");
console.log(comidas);
