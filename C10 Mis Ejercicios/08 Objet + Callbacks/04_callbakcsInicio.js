/* var devuelvoUsuario = function () {
  return "Camilo";
};

var devuelvoSaludo = function () {
  return "Hola";
};

var saludar = function (cb1, cb2) {
  return cb1() + " " + cb2();
};

console.log(saludar(devuelvoSaludo, devuelvoUsuario)); */

var devuelvoFrase = function (comida) {
  return "Hoy quiero comer:" + " " + comida;
};

var hablar = function (comida, cb) {
  return cb(comida);
};

console.log(hablar("pizza", devuelvoFrase));
