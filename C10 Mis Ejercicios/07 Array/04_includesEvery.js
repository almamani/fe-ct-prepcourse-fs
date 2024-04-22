/* const frutas = ["manzana", "pera", "plátano", "uva"];

console.log(frutas.includes("pera")); // Retorna true
console.log(frutas.includes("sandía")); // Retorna false

// También puedes especificar un índice para iniciar la búsqueda
console.log(frutas.includes("manzana", 1)); // Retorna false, porque 'manzana' está en el índice 0
console.log(frutas.includes("manzana", 0)); // Retorna true */

const numeros = [4, 20, 30, 40, 50];

// Comprobamos si todos los números son mayores que 5
const todosMayoresQue5 = numeros.every((numero) => numero > 5);
console.log(todosMayoresQue5); // Retorna false, el primero no cumple la condicion

// Comprobamos si todos los números son pares
const todosPares = numeros.every((numero) => numero % 2 === 0);
console.log(todosPares); // Retorna true, todos los números son pares
