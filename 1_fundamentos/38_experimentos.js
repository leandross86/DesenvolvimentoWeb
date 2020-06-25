let a = 3

global.a = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.export === this)
console.log(module.exports)

//criando uma variavel maluca sem var e let
abc = 3 // NÃO FAÇA ISSO!!!
console.log(global.abc)

// module.export = {c: 456, d: false, e: 'teste'}