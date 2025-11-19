let numeros = [15, 20, 25, 30, 35, 18, 22, 28, 32, 40];


let number = numeros.filter((numero) => {
    return numero > 20 && numero < 30
})

console.log(number)