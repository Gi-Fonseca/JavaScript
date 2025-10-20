//Variáveis e Operações

//1 - Somar dois numeros
/* let num1 = 5
let num2 = 2
let resultado = 5+2
console.log("Seu resultado é igual a:", resultado) */

//2 - Calcular a area de um triangulo
/* let base = 10 
let altura = 15
let resultado1 = 10*15
let resultado2 = resultado1 / 2
console.log("O resultado da sua area é igual a:", resultado2)
 */

//3 - Converter Celsius para Fahrenheit
/* let c = 28
let f = c*9/5
let resultado = f+32
console.log("Sua tenperatura em fahrenheit é:", resultado) */

//4 - Calcular a média de três números
/* let nota1 = 7
let nota2 = 9
let nota3 = 5
let soma = nota1 + nota2 + nota3
let resultado = soma/3
console.log("A média das suas notas é igual a:", resultado ) */

//5 - Multiplicar dois números 
/* let num1 = 50
let num2 = 70
let multi = num1 * num2
console.log("O seu resultado é:",multi) */

// Condicionais (if / else)

//1 - Verificar se um número é positivo, negativo ou zero.
/* let numero_ale = -10
if (numero_ale >0) {
    console.log("Numero positivo")
}   else if (numero_ale <0) {
    console.log("Numero negativo")
}   else {
    console.log ("Numero zero")
}
 */

//2 - Determinar se uma pessoa é maior de idade.
/* let idade = 17
if (idade >18) {
    console.log("Você é maior de idade")
}   else{
    console.log("Você é menor de idade")
} */

//3 - Verificar se um número é par ou ímpar.
/* let numero_ale = 5
if (numero_ale%2 == 0) {
    console.log("Seu numero é par")
}   else {
    console.log("Seu numero é impar")
} */

//4 - Calcular a média de duas notas e verificar se o aluno está aprovado
/* let nota01 = 8
let nota02 = 8
let media = nota01 + nota02
if (media/2 >= 7){
    console.log("Aprovado")
}   else {
    console.log("Reprovado")
} */

//5 - Receber três números e mostrar o maior deles.
/* let num1 = 6
let num2 = 1
let num3 = 9
if (num3>num1 && num3>num2){
    console.log ("Esse é o maior",num3)
}   else if (num1>num3 && num1>num2) {
    console.log ("Esse é o maior",num1)
}   else {
    console.log("Esse é o maior",num2)
}
 */

// Múltiplas Condições e switch
// 1 - Classificar idade:
/* let idade = 2

switch (true) {
    case idade <= 12 && idade >=0:
        console.log ("Criança")
        break
    case idade <=17 && idade >12:
        console.log ("Adolescente")
        break
    case idade <=59 && idade >17:
        console.log ("Adulto")
        break
    default:
        console.log("Idoso")
} */


//2 - Verificar se um ano é bissexto
/* let dias_por_ano = 2001
if (dias_por_ano%4 == 0) {
    console.log("Ano bissexto")
}   else {
    console.log("Ano normal")
}  */

//3 - Menu de operações matemáticas 
/* let ope = "+"
let a = 5
let b = 8
switch (ope) {
    case "+":
        console.log (`resultado: ${a+b}`)
        break
    case "-":
        console.log (`resultado: ${a-b}`)
        break
    case "*":
        console.log (`resultado: ${a*b}`)
        break
    case "/":
        console.log (`resultado: ${a/b}`)
        break
} */

//4 - Receber um número de 1 a 7 e mostrar o dia da semana
/* let dia = 3
switch (dia) {
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    default:
        console.log("Final de semana")
} */

//5 - Converter nota numérica (0-10) para conceito
/* let nota =9

switch (true) {
    case nota <= 10 && nota >=9:
        console.log ("A")
        break
    case nota <=8 && nota >7:
        console.log ("B")
        break
    case nota <=7 && nota >5:
        console.log ("C")
        break
    case nota <=5 && nota >3:
        console.log ("D")
        break
    case nota <3 && nota >2:
        console.log ("E")
        break
    default:
        console.log("F")
} */

// Laços de Repetição (for, while, do while)
//1- Exibir todos os números de 1 a 10
/* 
for (let i = 1; i < 11; i++) {
    console.log(i)
} */

//2 - Calcular a soma dos números de 1 a 100 com for.
/* let soma = 0
for (let i = 1; i < 101; i++) {
    soma = i + soma
}
console.log (soma) */

//3 - Mostrar a tabuada de um número digitado pelo usuário
/* let num = 6
for (let i = 1; i < 11; i++) {

    console.log(`${num} x ${i} = ${num*i}`)
}
 */

// 4 - Contar de 10 a 1
/* let contador = 1
while (contador < 11){
    console.log(contador)
    contador++
} */

//5 - Exibir todos os números pares de 1 a 50
/* let par = 0
for (let i = 2; i < 51; i=i+2) 
    console.log (i)
   */

//6 - Calcular o fatorial de um número
/* let num = 5 
let resultado = 1
for (let i = num; i > 0; i--) 
    resultado= resultado * i
console.log("Resultado é igual a", resultado) */

//Arrays (básico e loops)
//1 - Criar um array com 5 nomes e exibir todos com for.

/* let lista = ["Maracuja","Morango","Cuscuz"]
for (i = 0; i <lista.length; i++)
    console.log(lista [i]) */

//2 - Criar um array de números e mostrar apenas os pares.
/* let num = [1,2,3,4,5,6,7,8,9,10]
for (i = 1; i < num.length; i=i+2) 
    console.log(num[i])
 */
//3 - Somar todos os valores de um array de números.
/* let num = [1,2,3,4,5,6,7,8,9,10]
let soma=0
for (i = 0; i < num.length; i++) 
    soma = soma + num [i]
console.log (soma) */

//4 - Encontrar o maior número em um array
/* let array = [9, 22, , 6,45, 55]
let maior_num = array[0]
for (i = 1; i < array.length; i++) {
     if (array[i] > maior_num) {
         maior_num= array[i]
            }
}
console.log("O maior número é:", maior_num)
 */

//5 - Verificar se um elemento existe no array.
/* let num = [1,2,3,4,5,6,7,8,9,10]
console.log (num.includes(2))
 */

//6 - Adicionar um elemento no final do array
/* let num = [1,2,3,4,5,6,7,8,9,10]
num.push (11)
for (i = 0; i < num.length; i++)
    console.log(num[i]) */

//7 - Remover o último elemento do array
/* let num = [1,2,3,4,5,6,7,8,9,10]
num.pop (10)
for (i = 0; i < num.length; i++)
    console.log(num[i]) */


