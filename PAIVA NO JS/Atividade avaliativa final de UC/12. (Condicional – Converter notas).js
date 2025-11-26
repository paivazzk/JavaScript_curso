let notas = [9, 8, 6, 10]

notas.forEach(nota => {
    if(nota >= 9){
        console.log("A")
    }else if(nota >= 7){
        console.log("B")
    }else if(nota < 7){
        console.log("C")
    }
})