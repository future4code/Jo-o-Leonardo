1 - 

const bool1 = true
const bool2 = false
const bool3 = !bool2 //!bool2 === true

let resultado = bool1 && bool2
console.log("a. ", resultado)

//O && retorna true se ambos forem true, logo o console retornara false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

//False mais uma vez pois um dos elementos é false.

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

//!resulado vai ser true e && com bool1 || bool1 true tbm.

console.log("e. ", typeof resultado)

//Boolean

2 - 

let array
console.log('a. ', array)

//Vai dar undefined pq não foi declarado valor a variavel array (Sem o [] ela nem é um array)

array = null
console.log('b. ', array)

//Retornaria null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//Retornaria 11 que é o length do array. 

let i = 0
console.log('d. ', array[i])

//Se for considerando o array anterior, então a posição do indice 0 retornaria o primeiro elemento, que é o número 3.

array[i+1] = 19
console.log('e. ', array)

//Acho que retorna o array completo, trocando o 4 (Indicie 1 (i (que vale 0) +1)) por 19. 

const valor = array[i+6]
console.log('f. ', valor)

//Novamente i que vale 0 + 6, logo é a posição 6 que equivale ao elemento 9.


//----------Segunda parte------------

1 - 

let idadeUsuario = prompt("Qual a sua idade? ")
let idadeMelhorAmigx = prompt("Qual a idade do seu melhor amigo ou melhor amiga? ")

let comparaIdade = idadeMelhorAmigx < idadeUsuario

console.log("Sua idade é maior do que a do seu melhor amigo?" comparaIdade)

2 - 

let numeroUsuario = prompt("Favor insira um numero par: ")
let sePar = ( Number(numeroUsuario) % 2 )
console.log(Number(sePar))

//Quando tiver resto = 0 o numero é par, caso tenha resto diferente de zero o numero testado é impar

3 - 

const listaDeTarefas = []
listaDeTarefas.push(prompt("Informe a primeira tarefa que você precisa realizar? ")) 
listaDeTarefas.push(prompt("Informe a segunda tarefa a ser realizada? ")) 
listaDeTarefas.push(prompt("Agora informe a ultima tarefa a ser realizada? "))
alert(listaDeTarefas)
tarefaRealizada = prompt("Favor informe o indice (0, 1 ou 2) da tarefa já realizada: ")

listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

4 - 

let nomeDoUsuario = prompt("Favor informe seu nome: ")
let emailDoUsuario = prompt("Favor informe seu e-mail: ")

console.log("O e-mail" + " " + emailDoUsuario + " " + "foi cadastrado com sucesso. Seja bem-vinda(o)" + " " + nomeDoUsuario)