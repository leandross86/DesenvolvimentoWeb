// Armazenando um função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando um função arrowem uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Reduzindo ainda mais uma função com ArrowFunction
const imprimir2 = a => console.log(a)
imprimir2("Que legal!")