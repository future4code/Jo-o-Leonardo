"use strict";
let minhaString: string = "9";

console.log(minhaString);

/* a) let minhaString: string = 9, apresentou um erro de formato esperado.*/

let meuNumero: number | string = 10
/* b) Adicionando | com um outro tipo após.*/

enum CORES_ARCO_IRIS {
    AMARELO = "amarelo",
    VERDE = "verde",
    VERMELHO = "vermelho"
}

export type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

let Miguel: pessoa = {
    nome: "Vanessa",
    idade: 17,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}

let Maria: pessoa = {
    nome : "Maria",
    idade:  31,
    corFavorita: CORES_ARCO_IRIS.VERDE
}

let Sara: pessoa = {
    nome: "Vanessa",
    idade: 49,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
}