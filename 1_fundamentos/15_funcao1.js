// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Retorna NaN
imprimirSoma(2, 10, 4, 5, 6, 8, 50) //Vai pegar o dois primeiros numeros e ignorar o restante
imprimirSoma() // Retorna NaN


// Função com retorno
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())