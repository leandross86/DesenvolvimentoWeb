// Função construtora
function Pessoa (nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Leandro')
p1.falar()



// Class
class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = new Pessoa1('Leandro')
p2.falar()





// Função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p3 = criarPessoa('Leandro')
p3.falar()