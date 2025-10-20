//1 - Função com Callback – Verificação de Candidatos
// Crie uma função verificarCandidato(nome, callback) que:
// • Receba o nome de um candidato e um callback.
// • O callback deve verificar se o candidato está aprovado ou reprovado com
// base em um “banco de dados” simulado.
// • Retorne:
// o "Candidato aprovado para a próxima fase" se aprovado;
// o "Candidato reprovado" caso contrário.
// Banco de dados simulado:
// const candidatos = {
//  ana: true,
//  bruno: false,
//  carla: true,
//  daniel: false
// };
// Use candidatos[nome].


 const candidatos = {
  ana: true,
  bruno: false,
  carla: true,
  daniel: false
 };
function verificarCandidato (nome, callback){
    return callback (nome)
}

// Callback de conferencia
 function conferir (nome){
    if (candidatos [nome] == true){
        return "Candidato aprovado para a proxima fase"
    }else{
        return "Candidado reprovado"
    }
 }
console.log (verificarCandidato("daniel", conferir))

// 2 - Classe Simples – Colaborador
// Crie uma classe Colaborador com os atributos:
// • nome
// • cargo
// • salario
// Implemente os métodos:
// • aumentarSalario(percentual) → aumenta o salário conforme o percentual
// informado.
// • exibirDados() → retorna uma string formatada com o nome, cargo e salário
//atual.


class Colaborador{
    constructor(nome, cargo, salario){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }
aumentarSalario(percentual){
    return this.salario+percentual
}
exibirDados(){
    console.log (`Olá ${this.nome}, seja bem-vindo!, atualmente você está no cargo de ${this.cargo}, recebendo ${this.aumentarSalario(150)}`)
}
}
let exibir = new Colaborador ("Gilmar", "Analista de qualidade", 3000)
 exibir.aumentarSalario(150)
 exibir.exibirDados()

// 3 - Classe Simples – Folha de Pagamento
// Crie uma classe FolhaDePagamento que armazene as informações mensais de
// um colaborador.
// A classe deve conter os atributos:
// • nomeColaborador
// • cargo
// • salarioBase
// • diasTrabalhados
// Implemente os métodos:
// • calcularSalarioMensal() → calcula o valor proporcional ao número de dias
// trabalhados.
// o Fórmula: salarioBase / 30 * diasTrabalhados
// • resumoPagamento() → retorna uma string com o nome do colaborador,
// cargo, dias trabalhados e o valor a receber.

class FolhaDePagamento {
    constructor(nomeColaborador, cargo, diasTrabalhados, salarioBase){
        this.nomeColaborador=nomeColaborador
        this.cargo=cargo
        this.diasTrabalhados=diasTrabalhados
        this.salarioBase=salarioBase
    }
    calcularSalarioMensal(){
        return ((this.salarioBase / 30) * this.diasTrabalhados) + this.salarioBase
}
    resumoPagamento(){
        return `
            Nome: ${this.nomeColaborador}
            Cargo: ${this.cargo}
            Dias Trabalhados: ${this.diasTrabalhados}
            Valor a receber:${this.calcularSalarioMensal().toFixed(2)}
            `;
        }
}
const exibir2 = new FolhaDePagamento ("Gilmar", "Analista de qualidade", 2, 3000)
console.log(exibir2.resumoPagamento())


// 4 - Herança – Tipos de Contrato
// Crie uma classe Contrato com os atributos:
// • colaborador
// • dataInicio
// • tipo
// • salarioBase
// Crie o método:
// • calcularSalario() → retorna o salário base.
// Depois crie duas subclasses:
// • CLT → adiciona o atributo bônus percentual. Esse atributo será utilizado
// para calcular o salário total (o percentual não poderá ser superior a 15%).
// • Estagiario → adiciona o atributo horasSemanais (number) e recebe valor
// proporcional de R$ 20,00 por hora semanal.
// Cada subclasse deve sobrescrever o método calcularSalario() e também
// implementar o método detalhesContrato(), que retorna uma descrição completa
// do contrato.

class Contrato{
    constructor(colaborador, dataInicio, tipo, salarioBase){
        this.colaborador=colaborador
        this.dataInicio=dataInicio
        this.tipo=tipo
        this.salarioBase=salarioBase
    }
    calcularSalario(){
        return this.salarioBase
    }
}
class CLT extends Contrato{
    constructor (colaborador, dataInicio, tipo, salarioBase, bonusPercentual){
        super (colaborador, dataInicio, tipo, salarioBase)
        this.bonusPercentual= bonusPercentual
}
calcularSalario(){
    if (this.bonusPercentual <= 15){
        return ((this.salarioBase * 15) / 100) + this.salarioBase
    }else{
        return `Seu percentual está acima dos limites`
    }
}
detalhesContrato(){
        return `
            Colaborador: ${this.colaborador}
            Tipo: ${this.tipo}
            Data inicio: ${this.dataInicio}
            Bonus Percentual: ${this.bonusPercentual}%
            Salario base: ${this.salarioBase}
            Salario total:${this.calcularSalario().toFixed(2)}
            `;
        }

}

class Estagiario extends Contrato{
    constructor (colaborador, dataInicio, tipo, salarioBase, horasSemanais){
        super (colaborador, dataInicio, tipo, salarioBase)
        this.horasSemanais=horasSemanais
}
calcularSalario(){
    return (this.horasSemanais * 20) + this.salarioBase
}
detalhesContrato(){
        return `
            Colaborador: ${this.colaborador}
            Tipo: ${this.tipo}
            Data inicio: ${this.dataInicio}
            Horas semanais: ${this.horasSemanais}
            Salario base: ${this.salarioBase}
            Salario total:${this.calcularSalario().toFixed(2)}
            `;
        }
}
const mostrar = new CLT ("Gilmar", "15/07/2018", "Gerente", 5000, 15)
console.log(mostrar.detalhesContrato())
const mostrar2 = new Estagiario ("Ronaldo", "30/09/2025", "Estagiario", 1000, 10)
console.log(mostrar2.detalhesContrato())

// 5 - Herança + Polimorfismo – Cargos e Bonificações
// Crie uma classe Funcionario com os atributos:
// • nome
// • salarioBase
// E um método calcularSalario().
// Crie subclasses:
// • AssistenteRH → recebe 5% de bônus.
// • AnalistaRH → recebe 15% de bônus.
// • GerenteRH → recebe bônus fixo de R$ 3.000,00.
// Crie um array com 5 funcionários variados e exiba o nome e o salário calculado,
// demonstrando o polimorfismo em ação.

class Funcionario{
    constructor (nome,salarioBase){
        this.nome=nome
        this.salarioBase=salarioBase
    }
calcularSalario(){
    return this.salarioBase

}
}
class AssistenteRH extends Funcionario{
    constructor (nome,salarioBase){
        super(nome,salarioBase)
    }
    calcularSalario(){
        return ((this.salarioBase * 5)/100) + this.salarioBase
    }
}
class AnalistaRH extends Funcionario{
    constructor (nome,salarioBase){
        super(nome,salarioBase)

    }
    calcularSalario(){
        return ((this.salarioBase * 15)/100) + this.salarioBase
    }
}
class GerenteRH extends Funcionario{
    constructor (nome,salarioBase){
        super(nome,salarioBase)

    }
       calcularSalario(){
        return this.salarioBase + 3000
    }
}
const funcionários= [
    new AssistenteRH ("Ronaldo", 1000),
    new AnalistaRH ("Debora", 3000),
    new GerenteRH ("Gilmar", 5000),
    new AssistenteRH ("Sergio", 1500),
    new AnalistaRH ("Fatima", 4000)
]

funcionários.forEach(f => (
    console.log (`${f.nome} - Salario: R$ ${f.calcularSalario().toFixed(2)}`)
))
for(let i = 0; i < funcionários.length; i++)
{}

// 6 - Encapsulamento – Banco de Horas
// Crie uma classe BancoDeHoras que armazene:
// • atributo privado #horas
// • atributo colaborador
// Implemente os métodos:
// • adicionarHoras(qtd) → soma horas ao banco.
// • retirarHoras(qtd) → reduz horas (não permitir saldo negativo).
// • consultarHoras() → exibe o total atual de horas do colaborador.

class BancoDeHoras{
    #horas
    colaborador
    constructor (horas, colaborador){
      this.#horas = horas
      this.colaborador=colaborador
}
adicionarHoras(qtd){
    if (qtd >= 0 ){
        this.#horas += qtd;
    } else {
        return 'Valor Incorreto'
    }
}

retirarHoras(qtd){
    if (this.#horas < qtd){
        console.log ("Não tem essa quantidade de horas")
        return
    }
    this.#horas -= qtd
}

consultarHoras(){
    return `${this.colaborador}: ${this.#horas}`

}
}
const HorasAcumuladas = new BancoDeHoras (150, "Gilmar")
HorasAcumuladas.adicionarHoras(50)
HorasAcumuladas.retirarHoras(5)
console.log(HorasAcumuladas.consultarHoras())