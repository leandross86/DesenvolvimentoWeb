let valor //não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString) <-- Gera TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)