var persona = {
  nombre: "Lucas",
  edad: "26",
  estudios: { esProgramador: true },
  saludar: function () {
    console.log("Hola", this.nombre);
  },
  decirEstudios: function () {
    console.log("Es programador:", this.estudios.esProgramador);
  },
};
console.log(persona);

/* persona.nombre = "Andrea";
console.log(persona);

delete persona.edad;
console.log(persona);

persona.apellido = "Mamani";
console.log(persona); */

persona.saludar();
persona.decirEstudios();
