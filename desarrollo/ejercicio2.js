/*Ejercicio 2: Clasificación de notas
Descripción: Escribe un algoritmo que reciba una nota
de un examen (de 0 a 20) y determine si el estudiante
aprobó o reprobó. Considera que una nota mayor 
o igual a 11 es aprobatoria. Luego, implementa 
el código JavaScript.
*/

let info = "vas a colocar tu nota"
let nota = 0
nota = parseInt(prompt(info));

function clasificarNota(nota) {
    if (nota >= 11) {
        return "Tienes una nota aprobatoria";
    } else {
        return "No lo lograste, debes esforzarte mas";
    }
}

console.log(clasificarNota(nota));