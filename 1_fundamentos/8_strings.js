const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio, pois não tem indice
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola '+ escola + '!')
console.log(escola.replace(/\d/, 'e')) //Expressão regular de REGEX (/\d/) -> todos os digitos da string
console.log(escola.replace(/\w/g, 'e')) // Expressão regular de REGEX (/\g/w) -> todos as letras da string, g de global
console.log(escola.replace(3, 'e')) // Uso comum de replace
console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/)) // Utilizando REGEX