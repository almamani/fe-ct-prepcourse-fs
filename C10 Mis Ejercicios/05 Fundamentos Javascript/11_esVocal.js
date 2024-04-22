// La función recibe un argumento llamado letra el cual es un string.
// Retorna como resultado un string que indica si el argumento letra es una vocal.
// de lo contrario retorna el string "Dato incorrecto"
// Por ejemplo:
// "a" ---> "Es vocal"
// "u" ---> "Es vocal"
// "n" ---> "Dato incorrecto"
// "texto largo" ---> "Dato incorrecto"
// Tu código:

function esVocal(letra) {
  // Expresión regular para verificar si la letra es una vocal (mayúscula o minúscula)
  let res = /[aeiouAEIOU]/.test(letra);
  if (res === true) {
    console.log("Es vocal");
  } else {
    console.log("Dato Incorrecto");
  }
}

let letra = "n";
esVocal(letra);
