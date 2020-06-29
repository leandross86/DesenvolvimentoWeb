console.log(soma(3, 4)) // est function pode ser chamada antes de criar a function declaration


// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) //gera erro, pois tem que chamar essa função após a function expression

// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4)) //gera erro, pois tem que chamar essa função após a named function expression