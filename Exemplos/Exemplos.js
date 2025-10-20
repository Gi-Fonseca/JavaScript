/* // var nome = "João";
// var nome ="Maria";

// console.log(nome);//Saída: Maria


// let idade = 25;
// idade = 30;
// console.log(idade); //30

// const pi = 3.14;
// console.log(pi);

// let nomeCompleto = "Giovana Lays Coelho Fonseca";
// console.log(nomeCompleto);

// let texto = "Olá" // String
// let numero = 07; // Number
// let booleano = true; // Boolean
// let nulo = null; // Null
// let indefinido; // Undefined 

// let texto = "Olá rapaziada";
// let num1 = 10;
// let num2 = '20';
// let verdadeiro = true;

// let lista = ['Banana','Maça','Laranja'];
// let pessoa = {nome: 'Celso', idade: 30};

// function saudacao(nome){
//     return `Olá, ${nome}`;

// }

// console.log(saudacao('Celso'));
// console.log(pessoa.nome,pessoa.idade);
// console.log(pessoa);
// console.log(lista);
// console.log(lista[2]);

// let idade = 18;
// if (idade >= 18) {
//     console.log ("Maior de idade");

// } else {
//     console.log("Menor de idade");
// }

// let nota = 85

// if (nota >= 90 ) {
//     console.log("APROVADO");
// } 
//     else if (nota >= 70) {    
// }
/*  console.log("APROVADO COM B");
    else {
    console.log("REPROVADO");
 }
 */
/* let numeros = [1,2,3];
numeros.forEach(num=> console.log(num)); */
/* 
let contador = 0;
while (contador < 3 ) {
    console.log(contador);
    contador++;
} */

/* let num = 5;
do{
    console.log(num)
    num++;
}   while (num<3) */

// let lista = ["Banana","Maça","Laranja"]
// console.log(lista[0]) //Banana

// lista.push("Uva")//adiciona no final
// lista.pop()//remove o final
// lista.unshift("Manga")//adiciona no inicio
// lista.shift()//remove do inicio

// console.log(lista.includes("Maça"))//true
// console.log(lista.indexOf("Laranja"))//2
// console.log(lista.length)//tamanho do array

// class ContaBancaria {
//     #saldo
//     numeroConta

//     constructor (saldo, numeroConta){
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }
//     get getSaldo() {
//     return this.#saldo
//     }
//     set setSaldo(valor) {
//         if (valor != null && valor > 0 ) {
//             this.#saldo = valor 
//         } else {
//             console.log('Saldo insuficiente')
//         }

//     }
// }

// let conta = new ContaBancaria(100,"R2D2")
// conta.setSaldo = -200
// console.log (conta.numeroConta)
// console.log (conta.getSaldo)

// class Animal {
//     fazerSom(){
//         console.log('Emite um som generico')
//     }
// }
// class Cachorro extends Animal {
//     fazerSom(){
//         console.log(`AUAU`)   }
// }


// class Animal{
//     constructor (nome){
//         this.nome = nome
//     }
// }
// class Cachorro extends Animal{
//     constructor(nome){
//         super(nome)
//     }
// }
//  let cachorro = new Cachorro('Tom')
//  console.log(`Nome do cachorro: ${cachorro.nome}`)

// class Cachorro extends Animal {
//      fazerSom(){
//          console.log(`AUAU`)   
//     }
// }

// class Calculadora {
//     soma (a,b,c) {
//     if (c !== undefined) {
//         return a + b + c
//     }
//     return a + b
// }
// }

// let calc = new Calculadora()
// console.log(calc.soma (2,3))
// console.log(calc.soma(2,3,4))