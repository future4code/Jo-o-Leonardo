//**Exercícios de interpretação de código**

1 -

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//Ele declara a variavel valor com o valor inicial de 0, inicia um for onde declara uma variavel i (Que será usada na iteração) e define a condição do loop com condição de i menor que 5, iterando 1 ao valor de i sempre que a afirmação for verdadeira. Abaixo ele adiciona o valor de i ao valor da variavel "valor" (Não consegui evitar a redundância k), logo o valor da variavel Valor será o dobro de i. 

2 - 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//Será mostrado todos os números do array lista que forem maiores que 18. Logo o console exibirá em ordem 19, 21, 23, 25, 27 e 30.

//Sim, eu poderia efetuar um fo of passando pelo array através de uma variavel setada para 0 (Primeira posição de um Array) que seria icrementada a cada Loop.


Desafio - 

//Será exibido o numero 0 até 4 vezes (0, 00, 000 e 0000).


//3 - a)-

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let numero of arrayOriginal){
    console.log(numero)
}

//3 -b) -

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (numero of arrayOriginal){
    console.log(numero/10)
}



//3 -c) -

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let numero of arrayOriginal){
    if (numero % 2 === 0){
        console.log(numero)
    }
}

//3 -d) -
//Não entendi nada


//3 -e) -

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = 0
let menor = 999

for (let i = 0; i < arrayOriginal.length; i++) {
   if ( arrayOriginal[i] > maior ) {
      maior = arrayOriginal[i];
   }
   if ( arrayOriginal[i] < menor) {
       menor = arrayOriginal[i];
   }
}
console.log("O maior valor é: ", maior)
console.log("O menor valor é: ", menor)