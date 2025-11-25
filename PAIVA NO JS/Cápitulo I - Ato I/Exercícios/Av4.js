const mensagens = [
  "Hoje o dia está lindo",
  "Não gostei desse trabalho",
  "A aula foi muito divertida",
  "Que tarefa chata"
];
 
const proibida = ["chato","chata","Não gostei"];
 
const MsgFiltrada = mensagens.filter(msg =>
  proibida.some(palavra => msg.includes(palavra)
));
console.log(MsgFiltrada);