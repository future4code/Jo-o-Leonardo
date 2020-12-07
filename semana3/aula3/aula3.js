//1-

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//O if testa se o número tem resto zero na divisão por 2, desta forma ele descobre se é um número par (Passou no teste) ou impar (Não passou no teste)

//2 - 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) O codigo permita que o cliente digite uma fruta através do prompt, que será inserida na variavel fruta e seja direcionado a um dos cases contendo o valor da fruta escolhida que será setado na variavel preço (Declarada no escopo global acima do Switch). Caso a fruta escolhida não se encontre em nenhum case cadastrado a linha de default joga o valor padrão 5 na variavel preço. 

//Caso a fruta escolhida seja maça o preço mostrado será 2.25.

//Sem o break na fruta pêra o preço exibido seria o 5 do default embaixo antes do proximo break.

3-

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//declarando uma constante numero que será preenchida com o valor digitado no prompt e já convertida em formato Number através do cast antes do mesmo. 

//Se for 10 será exibida a msg "Esse número passou no teste". Se fosse -10 deveria ser exibido "Essa mensagem é secreta!!!" porém como o bloco não será executado o console não exibira nada ou apresentará algum erro. 

4-

const idadeUsuario = Number(prompt("Favor digite sua idade"))

if(idadeUsuario >= 18){
    console.log("Você pode dirigir.")
} 
if else {
    console.log("Você NÃO pode dirigir.")
  }
if
5 - 

const turno = prompt("Favor digite M (matutino), V (Vespertino) ou N (Noturno) para indicar seu turno")

if (turno === "M") {
    console.log("Seu turno é matutino.")
} 
else if (turno === "V") {
    console.log("Seu turno é verpertino.")
} 
else if (turno === "N") {
    console.log("Seu turno é noturno.")
}
else {
    console.log("Favor insira uma informação valida.")
}

6 - 

const turno = prompt("Favor digite M (matutino), V (Vespertino) ou N (Noturno) para indicar seu turno")

switch (turno) {
    case "M":
    console.log("Seu turno é matutino.")
    break;
    case "V":
    console.log("Seu turno é verpertino.")
    break;
    case "N":
    console.log("Seu turno é noturno.")
    break;
    default:
    console.log("Favor insira uma informação valida.")
    break;
}

7 - 

const genero = prompt("Qual gênero você pretende assistir?")
const preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco <= 15){
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}




