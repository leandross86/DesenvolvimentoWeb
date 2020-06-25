const funcs = []

for(var i = 0; i < 10; i++ ) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // Independente do valor passado no array ele imprime o mesmo valor devido a var