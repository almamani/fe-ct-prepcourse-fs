const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
  console.log(numero * 2);
});

const numeros1 = [1, 2, 3, 4, 5];

const dobles = numeros1.map((numero) => numero * 2);

console.log(dobles);
// Output: [2, 4, 6, 8, 10]
