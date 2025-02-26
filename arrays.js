// criando um vetor
const vetor = [1, 2, 3, 4, 5];  
const vetor2 = ["Banana", "Maçã", "Pera", "Uva"];
const vetor3 = [true, false, true, true];
// const vetor4 = [1, "Banana", true, 3.14]; (não é recomendado)

// push - adiciona um elemento no final do vetor
const vetor4 = [1, 2, 3, 4, 5];
vetor.push(6);
console.log(vetor4); // [1, 2, 3, 4, 5, 6]

// unshift - adiciona um elemento no início do vetor
const vetor5 = [1, 2, 3, 4, 5];
vetor.unshift(0);
console.log(vetor5); // [0, 1, 2, 3, 4, 5]

// concat - concatena dois vetores
const vetor6 = [7, 8, 9];
const vetorConcatenado = vetor.concat(vetor6);
console.log(vetorConcatenado); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// pop - remove o último elemento do vetor
const vetor7 = [0, 1, 2, 3, 4, 5];
vetor.pop();
console.log(vetor7); // [0, 1, 2, 3, 4]

// shift - remove o primeiro elemento do vetor
const vetor8 = [0, 1, 2, 3, 4, 5];
vetor.shift();
console.log(vetor8); // [1, 2, 3, 4, 5]

// Acessar um elemento do vetor
const vetor9 = [0, 1, 2, 3, 4, 5];
console.log(vetor9[2]); // 2

// Acessar o tamanho do vetor
const vetor10 = [0, 1, 2, 3, 4, 5];
console.log(vetor10.length); // 6

// Percorrer um vetor
const vetor11 = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < vetor11.length; i++) {
    console.log(vetor11[i]);
}
