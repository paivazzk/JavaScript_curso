let numeros = [5, 8, 11, 4, 3]



const Nimpares = numeros.filter((numeros) => {
    return numeros % 2 !== 0
})

let soma = 0

numeros.forEach(numeros => {
    soma += numeros
})
console.log(soma)