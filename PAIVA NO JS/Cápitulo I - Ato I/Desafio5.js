let alunos = [
"João-TurmaA", "Maria-TurmaB", "Pedro-TurmaA",
"Ana-TurmaC", "Carlos-TurmaA", "Julia-TurmaB"
]

let Turma = alunos.filter(aluno => {
    let Sala = aluno.split("Turma")[1]
    return Sala === "A"
})

console.log(Turma)