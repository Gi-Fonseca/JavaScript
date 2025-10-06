//Funções básicas com parâmetros e retorno
// // Função declarada com 2 números 

// function soma(a, b) { 

//   return a + b; 

// } 

// console.log(soma(5, 3)); // 8 

  

// // Função declarada com 3 notas (média) 

// function media(n1, n2, n3) { 

//   return (n1 + n2 + n3) / 3; 

// } 

// console.log(media(7, 8, 9)); // 8 

  

// // Função expressa (base * altura / 2) 

// const areaTriangulo = function(base, altura) { 

//   return (base * altura) / 2; 

// } 

// console.log(areaTriangulo(10, 5)); // 25 

 
// //Funções anônimas e arrow functions
// // Função anônima para par/ímpar 

// const parOuImpar = function(num) { 

//   return num % 2 === 0 ? "Par" : "Ímpar"; 

// } 

// console.log(parOuImpar(7)); // Ímpar 

  

// // Arrow function: maior número 

// const maiorNumero = (a, b) => { return a > b ? a : b}

// console.log(maiorNumero(10, 20)); // 20 

  

// // Arrow function: retorna pares de um array 

//  const numerosPares = (array) => {if (array % 2 === 0){return console.log (array)}}; 
//  let lista = [2,4,5,7,8]
//  for (let i = 0; < lista.length; i++){
//     numerosPares (lista [1])
//  }

 
// //Funções IIFE (Immediately Invoked Function Expression)


 

// // IIFE simples 

// (function() { 

//   console.log("Função executada imediatamente!"); 

// })(); 

  

// // IIFE quadrado de um número 

// (function(num) { 

//   console.log("Quadrado:", num * num); 

// })(5); 

 

 

 

// // Callback com boas-vindas 

// function boasVindas(nome, callback) { 

//   callback(nome); 

// } 

  

// boasVindas("Giovana", function(nome) { 

//   console.log("Bem-vinda, " + nome + "!"); 

// }); 

  

// // Callback dobrando números 

// function dobro (numero) { 

// return numero*2 }

// function aplicarCallback( array, callback){
//   let listaDobro = []

//   for(let i = 0; i < array.length; i++){
//     listaDobro.push(callback(array [i]))
//   }
//   return listaDobro

//   } 

//  console.log(aplicarCallback([1,2,3,4], dobro)); // [2,4,6,8] 

 

// function contagemDecrescente(n) { 

//    if (n === 0){
//         return

//    }else{
//     console.log(n); 
//     contagemDecrescente(n - 1); 

//    } 
//   }
// contagemDecrescente(10)
  

// // Assíncrona com delay de 2 segundos 

// async function esperar2s() { 

//   await new Promise(resolve => setTimeout(resolve, 2000)); 

//   console.log("Passaram 2 segundos!"); 

// } 

// esperar2s(); 

  

// // Assíncrona dobrando número após 1s 

//  async function dobrarDepois1s(num){
//    setTimeout(
//    () => {console.log(num*2)},
//    1000)

//    return num * 2; 

//  } 

//  dobrarDepois1s(5)

  

// // Simulando consulta usuário (3s) 

// async function consultarUsuario() { 

//   await new Promise(resolve => setTimeout(resolve, 3000)); 

//   console.log("Usuário encontrado no sistema!"); 

// } 

// consultarUsuario(); 

 