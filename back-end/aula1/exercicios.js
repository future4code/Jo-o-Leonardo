
/* ex1A - Através do uso da propriedade process.argv[2] (O 0 e o 1 já sao automaticamente preenchidos e usados pelo node) */

const ex1B = console.log(`Ola, meu nome é ${process.argv[2]} e eu tenho ${process.argv[3]} anos`);

const idade7 = Number(process.argv[3]) + 7
const ex1C = console.log(`Ola, meu nome é ${process.argv[2]}, eu tenho ${process.argv[3]} anos e terei ${idade7} anos daqui a 7 anos`);

const sinal = process.argv[2]  

switch(sinal){
	case "add":
        Number(process.argv[3]) + Number(process.argv[4])		
        break;
	case "sub":
		Number(process.argv[3]) - Number(process.argv[4])
		break;
   	case "mult":
		Number(process.argv[3]) * Number(process.argv[4])
		break;
	case "div":
		Number(process.argv[3]) / Number(process.argv[4])
		break;             
}