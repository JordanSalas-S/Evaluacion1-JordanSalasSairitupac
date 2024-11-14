/* Ejercicio 3: Conversión de grados Celsius a Fahrenheit
Crea una función que reciba una temperatura en grados 
Celsius y la convierta a Fahrenheit. 
La fórmula es:

Llama a la función con varios valores de prueba y 
muestra los resultados.
*/
let info = "PARA CONVERTIR DE GRADOS CELSIUS A Fahrenheit\n" +
            "Colocar la informacion abajo"
let celsius = 0
celsius = parseInt(prompt(info));

function convertirCaF(celsius) {
    if (celsius >-1000) {
        return (celsius * 9/5) + 32;
    } else {
        return "Coloca un valor correcto";
    }
}
console.log(convertirCaF(celsius));