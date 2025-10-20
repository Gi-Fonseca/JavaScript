//3. Crie uma função que receba um array de números e retorne apenas os números primos.

function filtrarLista(lista, callback){ //recebendo lista e callback
    for(let i = 0; i< lista.lenght; i ++){
        if (callback(lista[i])){ //chamar a função de callback em cada elemento
            console.log(lista[i])
        }
    };
}

function primo(numero){ // esse numero q a gnt vai ver se é primo ou nao
    if(numero < 2){
        return false
    }
    for(let i = 2; i < numero; i ++){
        if (numero % i == 0){
            return false
        }
    }
            return true
}
filtrarLista([1,2,4,5,7,9,13,76,93], primo)

//10. Crie uma classe Cofrinho que armazena valores de moedas e notas em um atributo privado. Adicione métodos depositar(moedas, notas), retirar(moedas, notas) e saldo().
class Cofrinho{
    #notas
    #moedas
    constructor (notas, moedas){
        this.#notas = notas
        this.#moedas = moedas
    }
    depositar(moedasDepositadas, notasDepositadas){
        this.#moedas += moedasDepositadas
        this.#notas += notasDepositadas
    }
    sacar(moedasSaque, notasSaque){
        return this.#moedas+this.#notas
    }
    get getSaldo(){
        return this.#moedas.this.notas
    }
}
const cofre = new Cofrinho (10, 10)
cofre.depositar(100, 30)
console.log(cofre.getSaldo())





// TESTE
function verificarEstoque(produto, quantidade, callback){
    for(let i = 0; i< quantidade.lenght; i ++){
        if (callback(quantidade[i])){
            console.log(quantidade[i])
        }
    };
}
function suficiente(pedido){ // esse numero q a gnt vai ver se é primo ou nao
    if(pedido > quantidade){
        return console.log ("Estoque insuficiente")
    } else {
        console.log ("Pedido aprovado")
    }
}
const estoque = {
    caixa: 50,
    palete: 10,
    empilhadeira: 2}
 estoque [produto]




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
