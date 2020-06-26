function Pessoa () {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa 

// EXEMPLO ABAIXO PODE TRAZER UM COMPORTAMENTO INDESEJADO (retornando NaN) obs: se usado a arrow function ele funciona normalemente
// function Pessoa () {
//     this.idade = 0

//     setInterval(function () {
//         this.idade++
//         console.log(this.idade)
//     }(this), 1000)
// }

// new Pessoa 