// La función recibe un "numero" por argumento.
// Determina si es una potencia de 2.
// Devuelve true si lo es, sino devuelve false.
// PISTA: Utiliza un bucle while.
// Tu código:
// while res <=1

function esPotenciaDeDos(numero) {
  while (numero > 1) {
    numero = numero / 2;
  }
  if (numero === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(esPotenciaDeDos(215));
