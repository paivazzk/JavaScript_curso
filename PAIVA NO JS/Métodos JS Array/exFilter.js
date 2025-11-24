const amigos = [
  {nome: "Paiva", cidade : "Tokyo", idade: "16"},
  {nome: "Leopoldino", cidade: "Pindamonhangaba", idade: "16"},
  {nome: "Wallace", cidade: "Macuco", idade: "23"}
];
 
const resultado = amigos.filter(u => u.cidade === "Tokyo");
console.log( "Amigos de Tokyo","\n", resultado,"\n");
 
 
const resultado2 = amigos.filter(u => u.nome.includes("W"));
console.log("Amigos com a letra W","\n",resultado2,"\n");

const resultado3 = amigos.filter(u => u.idade.includes(16));
console.log("Amigos com 16 anos","\n",resultado3,"\n");
