// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar função de forma literal
function fun1() { }

// Armazenar a função em uma variével
const fun2 = function () { }

// Armazenar a função em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro para outra função
function run (fun) {
    fun ()
}
run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

// outra forma
const cincoMais = soma(2, 3)
cincoMais(4)






