/*Ejercicio 1: Sumar los números del siguiente array
[23,4,6,7,99,12,19,8,43,21,65]
Declara un array con al menos 5 números y crea una función que recorra el array y sume todos sus elementos.
Muestra el resultado de la suma en la consola.
*/
let numeros = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];

function sumarArray(array) {
    return array.reduce((x, y) => x + y, 0);
}

console.log("La suma de los números del array es:", sumarArray(numeros));
