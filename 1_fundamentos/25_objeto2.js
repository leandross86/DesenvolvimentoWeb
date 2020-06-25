console.log(typeof Object)
console.log(typeof new Object()) // você pode instanciar com a palavra 'new'


const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6) class é uma syntax sugar(mas por debaixo dos panos é uma function)
console.log(typeof Produto)
console.log(typeof new Produto())