// Operador & será verdadeiro somente quantas as condições forem verdadeiras (Operador binario)
// v e v -> v
// v e f -> f
// f e v -> f
// f e f -> f

// Operador ou se tiver apenas uma condição verdadeiras todas são verdadeira (Operador binario) (|| = pipes->'ou' / | = pipe -> comparação em numero binarios) 
// v ou v -> v
// v ou f -> v
// f ou v -> v
// f ou f -> f

// Operador exclusivo uma condição tem que ser sempre diferente da outra (Operador binario)
// v xor v -> f
// f xor f -> f
// v xor f -> v
// f xor v -> v

// Operador negação lógico (!) (Operador unário)
// !v -> f
// !f -> v

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // OU
    const compraTv50 = trabalho1 && trabalho2 // E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // ^ -> operador bitwise xor
    const comprarTv32 = trabalho1 != trabalho2  // XOR
    const manterSaudavel = !comprarSorvete // NEGAÇÃO LÓGICA - operador unário

    return { comprarSorvete, compraTv50, comprarTv32, manterSaudavel

    }
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))