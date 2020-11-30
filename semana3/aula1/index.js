//1 - (10,5)

//2 - (10, 10, 10)

--

1 - 

let name
let age

typeof name
typeof age

//pq as variaveis não tinham valor declarado ainda.

let nome=prompt("Digite seu nome:");
let idade=prompt("Digite sua idade:");

    typeof nome
    typeof idade

    //agora os valores estão declarados logo o typeof consegue identificar o tipo



alert('Ola ' + nome + ' você tem: ' + idade + ' anos');

2 - 

let resposta1 = prompt("Qual seu nome?")
let resposta2 = prompt("O que você acha de bataras?")
let resposta3 = prompt("Como você se sentiu no 7x1 contra a Alemanha?")
let resposta4 = prompt("")
let resposta5 = prompt("")

console.log('Respostas: ' + resposta1, resposta2, resposta3, resposta4, resposta5)

//Obs: Esse enunciado tá mtu confuso

3 - 

let array = ["Estrogonofe de frango", " Estrogonofe de carne", " Pizza", " Bife de figado acebolado"," e Churrasco."]

alert(array)

alert('Essas são minhas comidas preferidas: ')
alert (array[0])
alert (array[1])
alert (array[2])
alert (array[3])
alert (array[4])

array[1] = prompt("Qual a sua comida preferida?" )
alert (array)

4 - 

let pergunta = ["Você é humano?", "Você é brasileiro?", "Você é carioca?"]
let resposta = [Boolean, Boolean, Boolean]

resposta[0] = prompt(pergunta[0])
resposta[1] = prompt(pergunta[1])
resposta[2] = prompt(pergunta[2])

alert (pergunta[0] + " " + resposta[0])
alert (pergunta[1] + " " + resposta[1])
alert (pergunta[2] + " " + resposta[2])

