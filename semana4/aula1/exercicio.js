/* ---------- Exercício 1 ---------------------

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) - Será imrpesso o resultado da função chamada duas vezes, porém usando a variavel com valores diferentes. No primeiro 2 e no segundo 10, retornando assim 10 e 50.

b) - O console não exibiria nenhum resultado.

----------------- Exercício 2 -------------------

```jsx
let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)
```

a) - O console exibira a posição do array indicada por i enquanto a condição do loop (i < 2) for verdadeira. Logo serão exibidas as entragdas "Darvas" e "Caio".

b) - O console retornaria "Amanda" e "Caio" respectivamente.


-----------------Exercício 3 ---------------------------

	const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}

a) - A função checa se um número é par e caso seja insere o dobro do número no arrayFinal que será lido no retorno do final da função. O nome da função poderia ser dobroPares

-------------------- Exercício 4 ----------------------------*/

//a

function meusDados() {
    console.log('Eu sou João Pedro, tenho 30 anos, moro em Rio de Janeiro e sou estudante.')
}


//b

function dadosCompletos (nome, idade, endereco, estudando) {
    return frase = console.log("Eu sou" + ${nome} + "tenho" + ${idade} "anos, moro em" + ${endereco} + "e" + ${estudando} + estudante.")
}
dadosCompletos("Joao", 30, "Rua Silva 123", True)


//-------------------- Exercício 5 ----------------------------*/
//a)

function somaNumeros (num1, num2){
    const resultado = num1 + num2
    return console.log(resultado)
}
somaNumeros(1, 2)

//b)

function comparaNumeros (num1, num2){
    if (num1 > num2) {
        resultado = true
    }
    else {
        resultado = false
    }
    return resultado
    }
    
    comparaNumeros(1, 3)

//c)

function mensagem10(frase){
    for (i = 0; i < 10; i ++)
    console.log(frase)
}
mensagem10("Já contei a piada do cara que sofria de amnésia?")


//-------------------- Exercício 6 ----------------------------*/

function meusDados() {
    let a = console.log('Eu sou João Pedro, tenho 30 anos, moro em Rio de Janeiro e sou estudante.')
    return a
}const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


//a

const meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function contaArray(){
    for(let i = 0; i < array.length; i++){
        console.log(i)
    }
    return i
}
contaArray(meuArray)

const contador = () => {
    for(let i = 0; i < meuArray.length; i++){
        console.log(meuArray[i])    
        
     }
     return length.meuArray
}     

contador(array)

//b

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let checaPares = (array) => {
    if (array % 2 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(checaPares(array[]))


//c

const meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let paresArray = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x)
          }
    }
  
    return arrayFinal;
  }
const resultado = paresArray(meuArray)
console.log(resultado)

//d

let numeroDePares = (array) => {
    let quantidadeDePares = 0
    for (numero of array) {
        if (ehPar(numero)) {
            quantidadeDePares += 1
        }
    }

    return quantidadeDePares
}