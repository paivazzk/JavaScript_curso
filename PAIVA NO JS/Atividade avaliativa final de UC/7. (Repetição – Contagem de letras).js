/*Conte quantas letras "a" existem na frase:
"A arara azul voa baixo."
*/

let frase = "a arara azul voa baixo."
let contador = 0
for(let i = 0; i < frase.length; i++){
    if(frase[i] === "a"){
        contador++
    }}