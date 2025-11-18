const prompt = require('prompt-sync')({ sigint: true })


let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura: '))

let imc = peso / (altura * 2)

console.log("Seu IMC é ", imc)