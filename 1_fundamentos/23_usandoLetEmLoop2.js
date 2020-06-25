const funcs = []

for(let i = 0; i < 10; i++ ) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]() // com let no laço for, imprime o valor atribuito no array