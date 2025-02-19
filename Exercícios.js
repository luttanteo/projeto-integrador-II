/* Exercício 1:
    Criar variáveis e constantes para os dados de uma pessoa:
    - Nome
    - Sobrenome
    - Ano de nascimento
    - Peso
    - Altura
    O programa deve imprimir no console a seguinte frase: "NOME tem IDADE anos, pesa PESO kg e tem ALTURA m de altura." */

const nome = "Lutt";
const sobrenome = "Anteo";
const anoNascimento = 2006;
let peso = 53;
let altura = 1.61;
console.log(`${nome} ${sobrenome} tem ${2025 - anoNascimento} anos, pesa ${peso} kg e tem ${altura} m de altura.`);



/* Exercício 2: Agora sobre entradas de dados (vide arquivo entradas.js):
    Solicite que o usuário informe seu nome e idade e imprima na tela a mensagem: "NOME tem IDADE anos." */

const prompt = require('prompt-sync')();
let nome = prompt('Digite o seu nome: ');
let idade = prompt('Digite a sua idade: ');
console.log(`${nome} tem ${idade} anos.`);



/* Exercício 3:
    Faça um programa para calcular o valor final de um produto após o vendedor informar o nome do produto, valor inicial e desconto. O programa deve imprimir na tela: "NOME DO PRODUTO: R$ VALOR FINAL." */

const prompt = require('prompt-sync')();
let nomeProduto = prompt('Digite o nome do produto: ');
let valorInicial = Number(prompt('Digite o valor inicial do produto: '));
let desconto = Number(('Digite o desconto do produto: ')) / 100;
let valorFinal = valorInicial - valorInicial * desconto;
console.log(`${nomeProduto}: R$ ${valorFinal}.`);



/* Exercício 4:
    Faça um programa que solicite 3 notas do usuário e deverá calcular a média aritmética. O programa deve imprimir na tela: "A média aritmética é RESULTADO." */

const prompt = require('prompt-sync')();
let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));
let nota3 = Number(prompt('Digite a terceira nota: '));
let media = (nota1 + nota2 + nota3) / 3;
console.log(`A média aritmética é ${media}.`);



/* Exercício 5:
    Faça um programa que solicite a quantidade de votos para o candidato A, para o candidato B, nulos e brancos. O programa deve retornar a porcentagem de votos de cada candidato e a porcentagem de votos nulos e brancos. */

const prompt = require('prompt-sync')();
let votosA = Number(prompt('Digite a quantidade de votos para o candidato A: '));
let votosB = Number(prompt('Digite a quantidade de votos para o candidato B: '));
let votosNulos = Number(prompt('Digite a quantidade de votos nulos: '));
let votosBrancos = Number(prompt('Digite a quantidade de votos brancos: '));
let totalVotos = votosA + votosB + votosNulos + votosBrancos;
let porcentagemA = (votosA / totalVotos) * 100;
let porcentagemB = (votosB / totalVotos) * 100;
let porcentagemNulos = (votosNulos / totalVotos) * 100;
let porcentagemBrancos = (votosBrancos / totalVotos) * 100;
console.log(`Porcentagem de votos para o candidato A: ${porcentagemA}%.`);
console.log(`Porcentagem de votos para o candidato B: ${porcentagemB}%.`);
console.log(`Porcentagem de votos nulos: ${porcentagemNulos}%.`);
console.log(`Porcentagem de votos brancos: ${porcentagemBrancos}%.`);



/* Exercício 6:
    Faça um programa onde o usuário digitará o salário bruto de um funcionário e o programa deverá mostrar na tela todos os descontos (INSS = 7%, IR = 15%) e o salário líquido do funcionário. */

const prompt = require('prompt-sync')();
let salarioBruto = prompt('Digite o salário bruto do funcionário: ');
let inss = salarioBruto * 0.07;
let ir = salarioBruto * 0.15;
let salarioLiquido = salarioBruto - inss - ir;
console.log(`Desconto do INSS: R$ ${inss}.`);
console.log(`Desconto do IR: R$ ${ir}.`);
console.log(`Salário líquido: R$ ${salarioLiquido}.`);
