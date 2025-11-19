let aniversariantes = [
"Ana-15/03", "Carlos-20/07", "Maria-10/03",
"João-05/12", "Beatriz-25/03", "Pedro-18/06"
]

let dia = aniversariantes.filter(aniversariante => {
    let aniversariante = aniversariante.split("/")[1]
    return aniversariante === "03"
})

console.log(dia)