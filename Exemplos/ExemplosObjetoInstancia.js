// const pessoa = {
//     nome:"João",
//     idade:30,
//     falar: function(){
//         console.log(`Olá, meu nome é ${this.nome}`)
//     }
// }
// pessoa.falar()

// const pessoa2 = {
//     nome:"Maria",
//     idade:26,
//     falar: function(){
//         console.log(`Olá, meu nome é ${this.nome}`)
//     }
// }
// pessoa2.falar()

// const pessoa3 = {
//     nome:"Renato",
//     idade:18,
//     falar: function(){
//         console.log(`Olá, meu nome é ${this.nome}`)
//     }
// }
// pessoa3.falar()

// const pessoa4 = {
//     nome:"Ana",
//     idade:42,
//     falar: function(){
//         console.log(`Olá, meu nome é ${this.nome}`)
//     }
// }
// pessoa4.falar()


// class Pessoa{
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade

// }

// saudacao(){
//     return console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos`)
// }
// }
// const pessoa2 = new Pessoa("Joãozinho", 2)
// pessoa2.saudacao()

// const pessoa3 = new Pessoa("Joãozao", 102)
// pessoa3.saudacao()

// const pessoa4 = new Pessoa("Joãolinho", 52)
// pessoa4.saudacao()

// class Conta{
//     constructor(titular, saldo){
//         this.titular = titular
//         this.saldo = saldo
//     }
//     depositar(valor){
//         this.saldo += valor
//         console.log(`Deposito realizado. Saldo atual: R$ ${this.saldo}`)
//     }
//     sacar(valor){
//         if (valor <= this.saldo){
//             this.saldo -= valor
//             console.log(`Saque realizado. Saldo atual: R$ ${this.saldo}`)
//         }else{
//             console.log(`Saldo insuficiente`)
//         }

    
//     }
// }
//  let conta1 = new Conta("Celso", 0)
//  conta1.depositar(200)
//  conta1.sacar(50)

//  conta1.sacar(149)