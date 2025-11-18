const prompt = require('prompt-sync')({ sigint: true })
for(let i = 0; i <= 100; i++){
    const number = Number(prompt('Digite um número até chegar em 100: '))
    i = i + number
}
console.log("Você chegou a 100!!")