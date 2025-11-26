let pessoas = [
 { nome: "Ana", idade: 14 },
 { nome: "Leo", idade: 18 },
 { nome: "Nina", idade: 13 }
]
let maior = pessoas.filter(pessoas => pessoas.idade >= 18)
console.log(maior)
