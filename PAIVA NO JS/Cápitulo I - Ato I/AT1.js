const prompt = require('prompt-sync')({ sigint: true })

const number = Number(prompt('Digite um número: '))

if(number > 10){ 
  console.log(number, "é maior que 10")
}else{
  console.log(number, "não é maior que 10")
}
