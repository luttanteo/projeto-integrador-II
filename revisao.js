const imput = require('prompt-sync') ();

//if else simples
const numero = 3;
if(numero > 3) {
    console.log("maior");
} else {
    console.log("menor ou igual");
}
/******************************/
//if else encadeado
if(numero == 3) {
    if(numero > 3) {
        console.log("maior");
    } else {
        console.log("igual");
    }
} else {
    console.log("menor");
}
/*****************************/
//if - else if - else
if(numero == 3) {
    console.log("igual");
} else if (numero > 3){
    console.log("maior");
} else {
    console.log("menor");
}
/*****************************/
//lógica condicional relacional
if(numero > 2 && numero < 4){
    console.log("Temos o número 3");
} else if(numero < 2 || numero > 4) {
    console.log("Não temos o número 3");
}
/*****************************/
//ternário
let mensagem = (numero == 3) ? 'Igual' : 'Não é igual' // o número é igual a 3? se sim, imprimir 'igual'. se não, imprimir 'Não é igual'.
    console.log(mensagem);

mensagem = (numero > 0) ? 'Positivo' : (numero > 0) ? 'Negativo' : 'Zero';
    console.log(mensagem);
/*****************************/
//switch case
switch (numero){
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    default:
        console.log('Final de semana')
}
/*****************************/
//laço de repetição while
while(numero < 6) {
    console.log(numero);
    numero ++;
}
//laço de repetição for
for(let i = 0; i < 4; i++) {
    console.log(i);
}
//laço de repetição do while
do {
   console.log(numero);
   numero --;
} while(numero > 0);
