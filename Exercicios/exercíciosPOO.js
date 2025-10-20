//1- Classe Produto
// Crie uma classe Produto com nome, preço e quantidade em estoque.
// Adicione um método para calcular o valor total do estoque.
// class Produto {
//     constructor (nome, preco, quantidade) {
//     this.nome = nome
//     this.preco = preco
//     this.quantidade = quantidade
//     }
//     calcular(){
//          console.log(`o valor total de ${this.nome} é igual a:${this.quantidade*this.preco}`)
        
    
//     }
// }
//  let estoque = new Produto("Mouse", 30, 300)
//  estoque.calcular(200)


// 2 - Classe Filme
//Crie uma classe Filme com título, diretor e ano de lançamento.
//Adicione um método que exiba uma frase como:
//"O filme Matrix foi lançado em 1999 e dirigido por Wachowski."

// class Filme {
//     constructor (titulo, diretor, lancamento) {
//     this.titulo = titulo
//     this.diretor = diretor
//     this.lancamento = lancamento
// }   
//     exibir(){
//         console.log(`O filme ${this.titulo} foi lançado em ${this.lancamento} e dirigido por ${this.diretor}`)
//     }
// }
// const exibir2 = new Filme ("The Batman", "2022", "Matt Reeves")
// exibir2.exibir()


//3 - Classe Aluno
//Crie uma classe Aluno com nome, nota1 e nota2.
//Adicione um método que calcule a média e outro que diga se o aluno está aprovado (média ≥ 7).

// class Aluno {
//     constructor (nome, nota1, nota2){
//     this.nome=nome
//     this.nota1=nota1
//     this.nota2=nota2
// }
//     calcular(){
//         return (this.nota1+this.nota2)/2
//     }
//     total(){
//         if (this.media()< 7){
//             console.log (`Você está reprovado com uma media de ${this.media}`)
//     }   else {
//         console.log(`Você está aprovado com uma media de ${this.media}`)
//     }
//     }
// }
// let notas = new Aluno ("Giovana", 8, 9)
// notas.total()

//4 - Classe Retângulo
//Crie uma classe Retangulo com base e altura.
//Adicione métodos para calcular a área e o perímetro.

// class Retangulo {
//     constructor (base, altura){
//     this.base = base
//     this.altura = altura
//     }
//     area(){
//         console.log(`o valor total da area é igual a:${this.base*this.altura}`)
//     }
//     perimetro(){
//         console.log(`o valor total do perimetro é igual a:${this.base+this.base+this.altura+this.altura}`)
//     }
// }
// const exibir = new Retangulo (3,4)
// exibir.perimetro()
// exibir.area()

//5 - Classe Carro
//Criar uma classe que simule o funcionamento de um carro em relação ao consumo de combustível.
//O carro terá:
//marca e modelo → atributos de identificação.
//combustível → quantidade de litros no tanque.
//E dois comportamentos principais:
//abastecer(litros) → aumenta a quantidade de combustível no tanque.
//dirigir(km) → simula o gasto de combustível ao rodar determinada distância(consumo: 1 litro a cada 10 km).

// class Carro{
//     constructor (marca,modelo,combustivel){
//     this.marca=marca
//     this.modelo=modelo
//     this.combustivel=combustivel

// }
//     km(km){
//         this.combustivel -= km/10
//         console.log(`Após você dirigir ${km}KM, o seu combustivel foi atualizado para ${this.combustivel} litros`)
// }
//     abastecer(litros){ 
//         console.log(`O combustivel total é ${this.combustivel} litros, após abastecer o seu total é igual a:${this.combustivel+litros} litros`)
// }
// }
// const exibir = new Carro ("Ford","Maverick", 20)
// exibir.km(30)
// exibir.abastecer(20)