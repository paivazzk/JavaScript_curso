
let produtos = [
{ produto: "Lápis", preco: 2 },
{ produto: "Mochila", preco: 80 },
{ produto: "Caderno", preco: 15 }
]

let menor = produtos.filter(produtos => produtos.preco < 20)
console.log(menor)