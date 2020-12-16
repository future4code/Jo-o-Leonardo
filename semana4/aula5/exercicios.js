/* Exercícios de interpretação de código

1 - Cria uma função conversorDeMoeda, que recebe um parametro valorEmDolar, nela uma constante cotacao recebe a informação de cotação digitada pelo usuario no prompt e já converte pra número através do cast Number.
Ela retorna o produto de valorEmDolar * cotação com uma string na frente indicando que o valor está em real (R$).
Fora do bloco da função é declarada a constante meuDinheiro que recebe o valor da função anterior sendo executada com o parametro 100. Por fim o console.log exibe o valor da constante anteior meuDinheiro. Logo a função recebe a cotação, multiplica pelo valor em dolar 

2 - Cria uma função investeDinheiro que recebe como parametros as variaveis tipoDeInvestimento e valor. Abaixo ele declara valorAposInvestimento mas não atribuí nada e cria uma condicional do tipo switch que implementa a variavel valorAposInvestimento com o produto de valor * a taxa do investimento, que varia em cada um dos cases; "Poupança", "Renda Fixa", "CDB" e "Ações" (Caso a informação digitada não seja um desses investimentos ele será direcionado para o case de exceção com alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO" ). Após o break do case especificado, o codigo retorna a variavel valorAposInvestimento e declara duas constantes novoMontante e segundoMontante, ambas recebem a chamada da função anterior investeDinheiro que recebe como parametro "Ações", 100 na primeira e "Tesouro Direto", 200 na segunda. Por fim o console exibe o retorno das duas consts anteriores.

3 - Declara 3 arrays, o primeiro 'numero' povoado de números e os outros dois 'array1' e 'array2' vazios.
Através de uma condicional For, ele checa se os números do array 'numeros' são pares verificando se o resto da divisão deles por 2 é igual a 0. Caso o número testado seja par ele é inserido no array1 através de um metodo push, caso contrario ele será inserido no array2. Ao final os comandos console.log exibem respectivamente a quantidade total de itens no array numero, a quantidade de itens pares no array1 e impares no array2 através da propriedade .length.

4 - Declara um array numeros povoado de numeros, a variavel numero1, recebendo a propriedade infinity (Que literalmente representa infinito) e a variavel numero2 que recebe o valor 0. Abaixo ele cria um for onde checa se os elementos do array numeros são menores que o valor de numero1, atribuindo então numero a numero1 ou maiores que o valor de numero2, atribuindo numero a numero2. Ao fim é exibido o valor de numero1 e numero2 no console.

Exercícios de Lógica de Programação

1 - const array = [1, 2, 3, 4]

a) Através de um For normal
for (i = 0; i < array.length; i++) { 
    console.log(array[i])

Onde i vai ser o index.

b ) Através de um while

while (i < array.length) { 
    console.log(array[i])
    i ++ 

c ) Através de um forEach (Que precisa de uma função callback)

array.forEach((item, index)) =>{
    console.log()
} 

2 - 

a) booleano1 && booleano2 && !booleano4

False

b) (booleano1 && booleano2) || !booleano3

True

c)  (booleano2 || booleano3) && (booleano4 || booleano1)

True

d) !(booleano2 && booleano3) || !(booleano1 && booleano3)

False

e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

False

3 -*/ 

const quantidadeDeNumerosPares = 5
let i = 0
while(i <= quantidadeDeNumerosPares) {
    i++
    console.log(i*2)
}

//4 -

let a = prompt("Informe o valor do lado a")
let b = prompt("Informe o valor do lado b")
let c = prompt("Informe o valor do lado c")

if (a === b && b === c){
    console.log("O triangulo é Equilátero")
} else if (a === b || b === c) {
    console.log("O triangulo é Isósceles")
} else {
    console.log("O triangulo é Escaleno")
}

//5 - 

let num1 = 15
let num2 = 30

if (num1 > num2)
console.log("O maior é:", num1)
else if (num2 > num1){
    console.log("O maior é o:", num2)    
} else {
    console.log("Os números são iguais")
}

if (num2 % num1 === 0){
    console.log(num1 + " é divisivel por " + num2)
} else if (num1 % num2 === 0){
    console.log(num2 + " é divisivel por " + num1)
}
    else{    
    console.log(num1 + " não é divisivel por " + num2)
}

let dif = (num1 - num2)
console.log("A diferença dos números é: ", Math.abs(dif))

/*- Exercícios de Funções

1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)
2. Escreva uma **função não nomeada** que faça um `alert("Hello Labenu!");`. Em seguida, invoque essa função.*/

const array = [1, 2, 3, 4, 5]
let maior = 0
let segundoMaior = 0
let menor = 5
let segundoMenor = 5

function segundos(array) {
    for (let i = 0; i < array.length ; i++){
        if (array[i] > maior) {
            maior = meuArray[i];
        }
    }
    for (let i = array.length; i > 0; i--){
    if (array[i] < menor) {
        menor = meuArray[i];
        }
    }
    console.log("O segundo maior número é: ", maior)
    console.log("O segundo menor número é: ", menor)
}

2//
let helloLab = function (ini, fim){
    const soma = (ini + " " + fim)
    return alert(soma)
}
const saudacao = helloLab("Hello", "Labenu")

//- Exercícios de Objetos

//1 - Arrays são lists de valores inexados, você pode acessar cada valor de um array através de um indice i que começa em 0 e vai até o tamanho total do Array, tecnicamente um array é um objeto. Já objetos são listas de atributos e trazem a visão pra mais perto do mundo real. (Ex: Objeto pessoa pode ter os atributos nome, cpf, idade etc...)

//2