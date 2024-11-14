/*Ejercicio 4: Encontrar el mayor de tres números

Crea una función que reciba tres números como parámetros 
y retorne el mayor de los tres.
Llama a la función con diferentes conjuntos de números 
para verificar que funcione correctamente.
*/

let info = "COLOCA 3 NUMEROS PARA\n" +
            "Y TE DIRE CUAL ES EL MAYOR"
let i = 0
let num1 = parseInt(prompt(info));
let num2 = parseInt(prompt(info));
let num3 = parseInt(prompt(info));

function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log('El numero mayor es '+ mayorDeTres(num1, num2, num3));