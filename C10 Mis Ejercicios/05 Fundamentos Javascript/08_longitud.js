// La función recibe dos argumentos llamados "str1" y "str2" que son strings.
// Retorna true si los dos strings tienen la misma longitud.
// De lo contrario, retorna false.
// Por ejemplo:
// "SoyHenry", "HenrySoy" ---> true
// "hi", "there" ---> false
// Tu código:
function tienenMismaLongitud(str1, str2) {
  let long1 = str1.length;
  let long2 = str2.length;
  if (long1 === long2) {
    return true;
  } else {
    return false;
  }
}

let val1 = "SoyHenry";
let val2 = "Henry";

res = tienenMismaLongitud(val1, val2);
console.log(`Los string ${val1} y ${val2} tienen la misma longitud: ${res}`);
