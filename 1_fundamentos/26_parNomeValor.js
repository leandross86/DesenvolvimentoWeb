//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}
// const saudacao = 'Epa!!!' //Se eu definir novamente a constante saudacao gera o SyntaxError: Identifier 'saudacao' has already benn declared

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)