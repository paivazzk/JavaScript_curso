let cidades = [
"São Paulo-SP",
"Rio de Janeiro-RJ",
"Campinas-SP",
"Belo Horizonte-MG",
"Santos-SP"
]

let SP = cidades.filter(cidade => {
    let cidade = cidade.split("-")[1]
    return cidade === "SP"
})

console.log(SP)