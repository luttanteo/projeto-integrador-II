// Objetivo: Entender o funcionamento dos operadores em JavaScript
/******************************************************************/
// Operadores aritméticos
let base = 2;
let expoente = 3;
let resultadoPotencia = base ** expoente;
console.log(resultadoPotencia); // Imprime 8
/******************************************************************/
let soma = 5 + 2;
console.log(soma); // Imprime 7
let subtracao = 5 - 2;
console.log(subtracao); // Imprime 3
let multiplicacao = 5 * 2;
console.log(multiplicacao); // Imprime 10
let divisao = 5 / 2;
console.log(divisao); // Imprime 2.5
let modulo = 5 % 2;
console.log(modulo); // Imprime 1 (resto da divisão)
/******************************************************************/
// Operadores de atribuição
let x = 5;
let y = 2;
x += y; // x = x + y
console.log(x); // Imprime 7
x -= y; // x = x - y
console.log(x); // Imprime 5
x *= y; // x = x * y
console.log(x); // Imprime 10
x /= y; // x = x / y
console.log(x); // Imprime 5
x %= y; // x = x % y
console.log(x); // Imprime 1
/******************************************************************/
// Operadores de comparação
let a = 5;
let b = 2;
let igual = a == b;
console.log(igual); // Imprime false
let diferente = a != b;
console.log(diferente); // Imprime true
let maior = a > b;
console.log(maior); // Imprime true
let menor = a < b;
console.log(menor); // Imprime false
let maiorIgual = a >= b;
console.log(maiorIgual); // Imprime true
let menorIgual = a <= b;
console.log(menorIgual); // Imprime false
/******************************************************************/
// Operadores Unários pré-fixados (faz a operação antes de imprimir)
// Menos utilizado, mas existe
let contador = 0;
console.log(++contador); // Imprime 1
console.log(contador); // Imprime 1
console.log(--contador); // Imprime 0
console.log(contador); // Imprime 0
/******************************************************************/
// Operadores Unários pós-fixados (faz a operação depois de imprimir)
// Mais utilizado, o que estamos acostumados a ver
let contador2 = 0;
console.log(contador2++); // Imprime 0
console.log(contador2); // Imprime 1
console.log(contador2--); // Imprime 1
console.log(contador2); // Imprime 0
/******************************************************************/
