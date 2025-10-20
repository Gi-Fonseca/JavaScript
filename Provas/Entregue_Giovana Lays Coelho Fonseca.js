//1) Função com Callback – Conferência de Estoque
// Crie uma função verificarEstoque(produto, quantidade, callback) que:
// Receba o nome do produto e a quantidade solicitada;
// Use o callback para verificar se a quantidade está disponível no estoque.
// Retorne "Pedido aprovado" se tiver estoque suficiente ou "Estoque insuficiente" caso contrário.
// Para simular um banco de dados utilize:
//           // "Banco de dados" de estoque
//           const estoque = {
//             caixa: 50,
//             palete: 10,
//             empilhadeira: 2
//           };
// Para utilizar a quantidade de produtos em estoque utilize: estoque[produto]

// function verificarEstoque(produto, quantidade, callback){
//     for(let i = 0; i< quantidade.lenght; i ++){
//         if (callback(quantidade[i])){
//             console.log(quantidade[i])
//         }
//     };
// }
// function suficiente(pedido){ // esse numero q a gnt vai ver se é primo ou nao
//     if(pedido > quantidade){
//         return console.log ("Estoque insuficiente")
//     } else {
//         console.log ("Pedido aprovado")
//     }
// }
// const estoque = {
//     caixa: 50,
//     palete: 10,
//     empilhadeira: 2}
//  estoque [produto]

//2) Classe Simples – Produto

// Crie uma classe Produto com os atributos:
// nome (string)
// preco (number)
// quantidade (number)
// Implemente os métodos:
// valorTotal() → retorna o valor total do estoque do produto (preço × quantidade).
// reporEstoque(qtd) → aumenta a quantidade em estoque do produto.

 class Produto {
     constructor (nome, preco, quantidade){
     this.nome=nome
     this.preco=preco
     this.quantidade=quantidade
 }
     valorTotal(){
        console.log(`O seu produto ${this.nome}, está apenas por ${this.preco} R$, e possui ${this.quantidade} unidades, vc pode lucrar até ${this.preco*this.quantidade}R$`)
        return this.preco*this.quantidade
     }
     reporEstoque(qtd){
         console.log(`Opa você que repor o seu estoque, estoque atualizado para: ${this.quantidade+qtd} unidades`)
     }
     }

 let exibir = new Produto ("Mouse", 120, 20)
 exibir.valorTotal()
 exibir.reporEstoque(30)

//3) Classe Simples – Pedido

// Na área de almoxarifado, cada pedido feito para o fornecedor contém um produto por vez, informado no momento da solicitação. O sistema precisa registrar o número do pedido, o nome do produto solicitado, o preço unitário do produto e a quantidade solicitada.

// O supervisor explicou que precisa:
// Calcular o valor total do pedido (preço × quantidade).
// Emitir um resumo contendo o número do pedido, nome do produto, quantidade e valor total.
// Modele uma classe Pedido que atenda a essa necessidade, criando atributos e métodos adequados.


class Pedido{
    constructor(numero, nome, preco, quantidade){
        this.numero = numero
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    valorTotal(){
        console.log(`Bem vindo ao nosso almoxarifado pedido ${this.numero}, você necessita de um ${this.nome}, que atualmente temos até ${this.quantidade} unidades, com o preço de ${this.preco}R$, o valor total sendo igual à ${this.preco*this.quantidade}`)
    }
}
let pedido = new Pedido (11960, "Monitor", 670, 300)
pedido.valorTotal()

//4) Herança – Veículos de Transporte

// Crie uma classe Veiculo com atributos:
// placa
// capacidade (em kg)
// Depois crie duas subclasses:
// Caminhao → adiciona atributo eixos e motorista.
// Van → adiciona atributo motorista.
// Cada subclasse deve implementar o método podeTransportar(carga) que verifica se o veículo consegue realizar a viagem:
// Van suporta até 5.000 kg.
// Caminhão suporta até 8.000 kg por eixo.
// Exemplo: um caminhão com 2 eixos pode transportar até 16.000 kg.

class Veiculo{
    constructor (placa, capacidade){
        this.placa = placa
        this.capacidade = capacidade
    }
}
    class Caminhao extends Veiculo{
        constructor(placa, capacidade, eixos, motorista){
            super (placa, capacidade)
            this.eixos = eixos
            this.motorista = motorista
        }
    podeTransportar(carga){
        if (this.capacidade / this.eixos <= 8000){
            console.log(`ESSA CAPACIDADE É ACEITA ${this.motorista} , pois o seu caminhão tem ${this.eixos} eixos`)
        } else {
            console.log("CAPACIDADE INSUFICIENTE")
        }
    } 

}
    class Van extends Veiculo{
        constructor(placa, capacidade, motorista){
            super (placa, capacidade)
            this.motorista = motorista
        }
    podeTransportar(carga){
        if (this.capacidade <= 5000){
            console.log(`ESSA CAPACIDADE É ACEITA ${this.motorista}`)
        } else {
            console.log("CAPACIDADE INSUFICIENTE")
        }
    } 
}

let veiculo = new Caminhao ("B40T30", 6000, 2, "Gilmar")
veiculo.podeTransportar()
let veiculo2 = new Van ( "B40T30", 1000, "Cirilo")
veiculo2.podeTransportar()

// 5) Herança + Polimorfismo – Funcionários da Logística

// Crie uma classe Funcionario com os atributos:
// nome
// salarioBase
// E um método calcularSalario().

// Crie subclasses:
// OperadorDeEmpilhadeira → recebe adicional de 10% sobre o salário base.
// GerenteDeLogistica → recebe adicional fixo de R$ 2.000,00.
// Simule um array com 5 funcionários diferentes e exiba os salários calculados utilizando for, demonstrando o polimorfismo em ação.

class Funcionario{
    constructor(nome, salarioBase){
        this.nome=nome
        this.salarioBase=salarioBase
    }
    calcularSalario(){
    }
}
class OperadorDeEmpilhadeira extends Funcionario{
    constructor (nome, salarioBase, adicional){
        super (nome, salarioBase)
        this.adicional=adicional
    }
    calcularSalario(){
        return (this.salarioBase * 10 / 100) + this.salarioBase
    }
}
class GerenteDeLogistica extends Funcionario{
    constructor (nome, salarioBase, fixo){
        super (nome, salarioBase)
        this.fixo=fixo
    }
    calcularSalario(){
        return this.salarioBase + this.fixo
    }
}


// 6) Encapsulamento – Controle de Almoxarifado

// Crie uma classe Almoxarifado que armazene um atributo privado #quantidade e o nome de um produto.

// Implemente os métodos:
// adicionarProduto(qtd)
// retirarProduto(qtd) (não permitir retirar mais do que existe)
// consultarEstoque() (retorna todos os produtos e quantidades).


// class Almoxarifado{
//     #quantidade

//     constructor (quantidade){
//         this.#quantidade = quantidade
//     }
//     adicionarProduto(qtd){
//         return this.#quantidade + qtd
//     }
//     retirarProduto(qtd){
//         if (qtd > this.#quantidade){
//             console.log(`Não é possivel retirar essa quantia`)
//         } else {
//             console.log(`Sua retirada foi um sucesso, agora existe um total de ${this.#quantidade - qtd}`)
//         }
//     } 
//     get consultarEstoque(){
//         return this.#quantidade
//     }
// }
// let mostrar = new Almoxarifado (2000)
// mostrar.adicionarProduto(20)
// mostrar.retirarProduto(15)
// mostrar.consultarEstoque
