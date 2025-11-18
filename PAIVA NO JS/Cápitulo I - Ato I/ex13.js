const prompt = require('prompt-sync')({ sigint: true })


    let Prova1 = Number(prompt(`Digite a nota da sua prova 1: `))
    let Prova2 = Number(prompt(`Digite a nota da sua prova 2: `))
    let Reda = prompt(`Digite a nota da sua redação: `)


let Nota = Prova1 + Prova2 + Reda

if(Nota >= 1500){
    console.log(`Você pode estudar na UFLA`)
}else if(Nota < 1500 && Nota >= 1000){
    console.log(`Você pode estudar na UNILAVRAS`)
}else if(Nota < 1000){
     console.log(`Volte ano que vem!!`)
}