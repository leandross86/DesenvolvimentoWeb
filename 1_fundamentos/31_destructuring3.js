function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
// console.log(rand({ max: 50, min: 40 })) refatorando as duas linhas acima
console.log(rand({ min: 995 }))
console.log(rand({ }))
//console.log(rand()) sem passar o objeto gera erro, porque ele fica tentando desestruturar algo null or undefined

