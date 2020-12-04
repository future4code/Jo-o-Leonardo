/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Bem vindo ao jogo de Blackjack!")
const usuario = []
const computador = []
let pontosUsuario = 0
let pontosComputador = 0

let rodada = confirm("Você quer iniciar uma nova rodada?")
if (rodada==true){
   alert("Então vamos sortear as cartas!")
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   pontosUsuario = (usuario[0].valor + usuario[1].valor)
   console.log("Usuário - cartas:" + usuario[0].texto + ", " + usuario[1].texto + "."  + "Pontuação: " + pontosUsuario)
   computador.push(comprarCarta())
   computador.push(comprarCarta())
   pontosComputador = (computador[0].valor + computador[1].valor)
   console.log("Computador - cartas:"  + computador[0].texto + ", " + computador[1].texto + "."  + "Pontuação: " + pontosComputador)
   
      if (pontosUsuario > pontosComputador){
         console.log("O usuário ganhou!")
      } else if (pontosUsuario < pontosComputador){
         console.log("O computador ganhou!")
      }  else{   
            console.log("Empate!")
      }   

} else {
	alert("O jogo acabou")
}
