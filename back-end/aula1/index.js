const countries = require("./countries");
//process.argv[0] é o próprio node
//process.argv[1] é o arquivo que o node vai rodar
//process.argv[2] é o meu pedaço de string
const myString = process.argv[2];
console.log(myString)

const search = countries.filter(country =>
    country.name
        .toLowerCase()
        .includes(myString));

console.table(search);
// const idade = Number(process.argv[4]);

// console.log(`Hello, ${process.argv[2]}, o seu cabelo é ${process.argv[3]}.
// Você tem ${idade} anos.`);

