const produtos = [
  {id: 1, nome: "Fone Bluetooth"},
  {id: 2, nome: "Mouse Gamer"},
  {id: 3, nome: "Fone com Fio"},
  {id: 4, nome: "Teclado Mecânico"}
]

const PalaFone = produtos.filter(u => u.nome.includes( "Fone"));
console.log(PalaFone)