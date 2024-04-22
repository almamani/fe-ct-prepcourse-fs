/* var libro = { autor: "Borges", genero: "Policial", año: 1998 };
libro.hasOwnProperty("nombre");
console.log(libro.hasOwnProperty("autor"));

console.log(Object.keys(libro)); */

/* var mundo = { Continentes: 7, Paises: 195, Oceanos: 5 };
for (var prop in mundo) {
  console.log(
    "Propiedad:" + " " + prop + " --- " + "Valor:" + " " + mundo[prop]
  );
} */

var mascota = {
  animal: "Perro",
  raza: "Ovejero Aleman",
  dueña: "Andreita",
  info: function () {
    console.log("Mi perro es un:" + " " + this.raza);
  },
};

mascota.info();
