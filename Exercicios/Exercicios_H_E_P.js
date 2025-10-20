//1. Crie uma classe InstrumentoMusical com o método tocar(). Depois, crie duas subclasses Violao e Piano que herdem de InstrumentoMusical e sobrescrevam o método tocar() exibindo mensagens diferentes.
// class InstrumentoMusical{
//     tocar(){
//         console.log('Emite um som musical')
//     }
// }
// class Violao extends InstrumentoMusical {
//     tocar(){
//         console.log ('Som de violao🎸')
//     }
// }
// class Piano extends InstrumentoMusical {
//     tocar(){
//         console.log ('Som de piano🎹')
//     }
// }
// let violao = new Violao ()
// violao.tocar()
// let piano = new Piano ()
// piano.tocar()

//2. Crie uma classe Funcionario com os atributos nome e salario. Crie uma classe Gerente que herde de Funcionario e adicione o atributo bonus.

// class Funcionario{
//     nome
//     salario
//     constructor(nome, salario){
//         this.nome=nome
//         this.salario=salario
//     }
// }
// class Gerente extends Funcionario{
//     constructor(nome,salario,bonus){
//         super(nome,salario)
//         this.bonus=bonus
//     }
// }
// let gerente = new Gerente('Jeferson', 1200, 300)
// console.log(`Nome do gerente: ${gerente.nome}, que recebe um salario de ${gerente.salario}, alem de receber um bonus igual a ${gerente.bonus}, recebendo até: ${gerente.bonus+gerente.salario}`)

//3. Implemente uma classe Veiculo com os atributos marca e ano. Depois crie:
//Carro (com atributo adicional portas)
//Moto (com atributo adicional cilindradas)

// class Veiculo{
//     marca
//     ano
//     constructor(marca, ano){
//         this.marca=marca
//         this.ano=ano
//     }
// }
// class Carro extends Veiculo{
//     constructor(marca,ano,portas){
//         super(marca,ano)
//         this.portas=portas
//     }
// }
// class Moto extends Veiculo{
//     constructor(marca,ano,cilindradas){
//         super(marca,ano)
//         this.cilindradas=cilindradas
//     }
// }
// let veiculo = new Carro ('Nissan', 2015, 2)
// console.log(`O veiculo da marca ${veiculo.marca} de ${veiculo.ano}, possuia uma variedade de carro com apenas ${veiculo.portas} portas`)
// let veiculo2 = new Moto ( 'Nissan', 2015, 2000)
// console.log (`enquanto a moto possui até ${veiculo2.cilindradas} cilindradas`)

//4. Crie uma classe Funcionario com o método calcularSalario(). Crie duas subclasses:
//Gerente: salário base + bônus de 30%.
//Desenvolvedor: salário base + adicional de 20%.

// class Funcionario{
//     base
//     constructor(base){
//     this.base=base
//     }
// }
// class Gerente extends Funcionario{
//     constructor(base, bonus){
//         super (base)
//         this.bonus=bonus
//     }
// }
// class Desenvolvedor extends Funcionario{
//     constructor(base, bonus){
//         super (base)
//         this.bonus=bonus
//     }
//  calcularSalario(){
//      return this.base*this.bonus/100
//    }
// }
// let gerente = new Gerente (2000, 30)
// console.log(`O salario base do gerente é igual a ${gerente.base} porem o gerente ganhou um bonus de ${gerente.bonus}%, assim tendo um salario totalizado em ${calcularSalario()+gerente.base}`)
// let desenvolvedor = new Desenvolvedor (5000, 20)
// console.log(`O salario base do gerente é igual a ${desenvolvedor.base} porem o gerente ganhou um adicional de ${desenvolvedor.adicional}%, totalizando o seu salario em: ${calcularSalario()+desenvolvedor.base}`)

//5. Implemente uma classe base ContaBancaria com atributos titular e saldo, e métodos depositar() e sacar().
//ContaCorrente deve cobrar uma taxa de R$ 2,00 em cada saque.
//ContaPoupanca deve render 5% ao mês quando for chamado o método atualizarSaldo().


//  class ContaBancaria {
//      constructor (titular, saldo){
//      this.titular = titular
//      this.saldo = saldo

//      }  
      
//      depositar(valor){
//        return this.saldo+valor
//     }
//      sacar(valor){
//         return this.saldo-valor
//     }
// }
//     class ContaCorrente extends ContaBancaria{
//         constructor(titular,saldo,taxa){
//             super(titular,saldo)
//             this.taxa=taxa

//         }
//         sacar(valor){
//             return this.saldo-this.taxa-valor
//         }
//     }
//     class ContaPoupanca extends ContaBancaria{
//         constructor(titular,saldo,porcentagem){
//             super(titular,saldo)
//             this.porcentagem=porcentagem
//         }   
//         atualizarSaldo(){
//             return this.saldo+this.porcentagem/100*this.saldo
//         }
//     }

// const exibir = new ContaCorrente ('Giovana', 2000, 2)
// console.log(`Olá ${exibir.titular} você sacou ${300}R$ totalizando o seu saldo para ${exibir.sacar(300)}`)
// const exibir2 = new ContaPoupanca ('Giovana', 5000, 5)
// console.log(`Olá ${exibir2.titular} com 5% de rendimento ao mes sua conta, sua conta foi atualizada para ${exibir2.atualizarSaldo()}`)

//6. Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set que permitam acessar e modificar esses atributos de forma controlada (não permitir preço negativo).

// class Produto {
//     #nome
//     #preco

//     constructor (nome, preco) {
//         this.#nome = nome
//         this.#preco = preco
//     }
//     get nome() {
//         return this.#nome
//     }
//     get preco() {
//         return this.#preco
//     }

//     set setPreco(valor){
//         if(valor >= 0){
//             return this.#preco = valor
//         } else {
//             console.log('Erro')
//         }
//     }
// }


// let produto = new Produto ('PC', 1500)
// console.log(`O produto é ${produto.nome} e custa ${produto.preco}`)
// produto.setPreco = 2000
// console.log(`O produto é ${produto.nome} e custa ${produto.preco}`)


//7. Implemente uma classe Carro com atributo privado velocidade. Crie os métodos públicos acelerar() (aumenta +10 km/h) e frear() (diminui -10 km/h, sem permitir valores negativos).
//  class Carro {
//     #velocidade
     
//     constructor (velocidade){
//         this.#velocidade = velocidade
//     }
//     get velocidade(){
//         return this.#velocidade

//     }
//     acelerar(){
//         return this.#velocidade+=10
//     }

//     frear(){
//         if (this.#velocidade >=0 ){
//             return this.#velocidade-10
//         } else {
//         console.log ("Não é possivel")
//      }

//     } 
    
//     }

// let carro1 = new Carro (250)
// console.log (` O seu carro está a ${carro1.velocidade}, após frear em uma curva seu carro ficou ${ carro1.frear()}`)

// 8 - Crie uma classe Conta com atributo privado saldo. Garanta que só seja possivel modificar o saldo pelos metodos depositar () (apenas valores positivos) e sacar() (apenas se houver saldo insuficiente)

// class Conta {
//     #saldo
//     constructor(saldo) {
//     this.#saldo = saldo
// }

//     get saldo(){
//     return this.#saldo
// }
//     depositar (valor){
//         if (this.#saldo >=0){
//             return this.#saldo + valor
//     } else {
//         console.log ("Não é possivel")
//     }
// }
//     sacar(valor){
//     if (this.#saldo >=0){
//             return this.#saldo - valor
//     } else {
//         console.log ("Insuficiente")
//     }
// }
// }
// let conta = new Conta (250)
// console.log (` A sua conta esta atualmente com ${conta.saldo}R$, após depositar um quantia o seu saldo ficou igual a ${ conta.depositar(300)}R$`)

// 9 - Implemente uama classe Usuario com atributo privado senha. Crie o metodo validarSenha(senhaDigitada) que retorna true se a senha estiver correta e false caso contrario
 
// class Usuario{
//     #senha
//     constructor (senha){
//         this.#senha = senha
//     }
//      get senha(){
//      return this.#senha
//     }
//  validarSenha(senhaDigitada){
//     if (senhaDigitada === this.#senha ){
//         return "TRUE"
//     } else {
//         return "FALSE"
//  }
// }
// }
// let usuario = new Usuario (206)
// usuario.validarSenha (290)
// console.log(usuario.validarSenha())

//10 - Crie uma classe retangulo com atributos privados largura e altura. Crie metodos publicos get Area () get perimetro () para retornar a area e o perimetro

// class Retangulo {
//         #largura
//         #altura
//         constructor(largura,altura) {
//         this.#largura = largura
//         this.#altura = altura
//  }

//      get area(){
//      return this.#largura * this.#altura
// }
//      get perimetro(){
//      return this.#largura * 2 + this.#altura *2
//      }
//     }
//  let retangulo = new Retangulo (4,5)
//  console.log (` O seu retangulo possui ${retangulo.area} de area e ${retangulo.perimetro} de perimetro`)

//11 - Crie uma classe Forma com o metodo calcularArea(). Crie as classes Quadrado (lado), Retangulo (largura e altura) e Circulo (raio), sobrescrevendo o metodo para calcular a area corretamente.

class Forma {
    calcularArea(){}
}
    class Quadrado extends Forma{
    constructor (lado){
        super()
        this.lado=lado
    }
        calcularArea(){
            return this.lado*this.lado
    }
}
class Retangulo extends Forma {
        constructor (largura,altura){
            super()
            this.largura = largura
            this.altura = altura

        }
        calcularArea(){
            return this.largura*this.altura
        }
    }
class Circulo extends Forma {
    constructor (raio){
        super()
        this.raio = raio
    }
        calcularArea(){
            return (this.raio**2) * 3.14
        }
    }


let forma = new Forma ()
let quadrado = new Quadrado(5)
console.log(quadrado*calcularArea)
let retangulo = new Retangulo (5, 4)
let circulo = new Circulo (6)