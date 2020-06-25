console.log('a =', a)
var a = 2
console.log('a =', a) //a var sofre o içamento, conhecido como hoisting

console.log('b =', b)
let b = 2
console.log('b =', b) //o efeito de içamento não acontece com let, gerando ReferenceError = Cannot acess 'b' before initialization / b is not defined



// function teste() {
//     console.log('a =', a)
//     var a = 2
//     console.log('a =', a)
// }
// teste()