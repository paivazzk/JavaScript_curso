const prompt = require('prompt-sync')({ sigint: true })

let Pedidos = []

for(let i = 0; i < 4; i++){
const PedidoCliente = prompt('Faça seu pedido: ')
Pedidos.push(PedidoCliente)
}

console.log(Pedidos)
Pedidos.pop()

console.log(Pedidos)
Pedidos.pop()


Pedidos.forEach((Pedidos, index) => {
    console.log(`${index + 1}. ${Pedidos} `)
})
