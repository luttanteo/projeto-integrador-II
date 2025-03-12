/* criar um imput, duas classes. Uma classe se chama carro e outra, carrinho. no carro vai ser colocado o modelo e o valor. O carrinho, o total e os itens[tem vetor]. O carrinho precisa adicionar itens, remover itens e fechar compra. Criar um estoque de carros[vetor], deve aparecer no console: add carro ao carrinho, remover carro do carrinho, fechar compra, sair. Só encerra qd fechar compra ou sair.*/

const prompt = require('prompt-sync')();

console.log("Bem-vindo à nossa loja de carros!");

class Carro {
    constructor(modelo, valor) { // o modelo e o valor são obrigatórios para um carro estar no projeto.
        this.modelo = modelo;
        this.valor = valor;
    }
} // !

class Carrinho {
    constructor() { // nesse caso, como o carrinho começa vazio, nada é obrigatório.
        this.itens = [];
        this.total = 0;
    } // !

    adicionarCarro(carro) {
        this.itens.push(carro); // o this.itens é um array que armazena todos os carros que foram adicionados no carrinho
        this.total += carro.valor; // "esse total vai somar com o valor do carro colocado no carrinho."
        console.log(`${carro.modelo} adicionado ao carrinho. Total: R$ ${this.total}`); 
    } // *

    removerCarro(modelo) {
        const index = this.itens.findIndex(carro => carro.modelo === modelo);
        if (index !== -1) {
            this.total -= this.itens[index].valor;
            console.log(`${this.itens[index].modelo} removido do carrinho. Total: R$ ${this.total}`);
            this.itens.splice(index, 1);
        } else {
            console.log("Carro não encontrado no carrinho.");
        }
    } // *

    fecharCompra() {
        if (this.itens.length === 0) {
            console.log("Seu carrinho está vazio!");
        } else {
            console.log("Compra finalizada! Total: R$", this.total);
            this.itens = [];
            this.total = 0;
        }
    }
} // *

const estoque = [
    new Carro("Ford Fiesta", 55339),
    new Carro("Chevrolet Onix", 102829),
    new Carro("Hyundai HB20", 78632),
    new Carro("Toyota Corolla", 148870)
]; // !

const carrinho = new Carrinho(); // *

function menu() { // *
    let opcao;
    console.log("1 - Adicionar carro ao carrinho");
    console.log("2 - Remover carro do carrinho");
    console.log("3 - Fechar compra");
    console.log("4 - Sair");
    opcao = prompt("Escolha uma opção: "); // !

    switch (opcao) {  // !
        case "1":
            console.log("Estoque disponível:"); // *
            estoque.forEach((carro, index) => console.log(`${index + 1} - ${carro.modelo} - R$ ${carro.valor}`)); // *
            let escolha = parseInt(prompt("Escolha o número do carro: ")) - 1; // *
            if (estoque[escolha]) {
                carrinho.adicionarCarro(estoque[escolha]); // *
            } else {
                console.log("Opção inválida."); // *
            }
            break;
        case "2":
            let modeloRemover = prompt("Digite o modelo do carro para remover: ");
            carrinho.removerCarro(modeloRemover);
            break;
        case "3":
            carrinho.fecharCompra(); // !
            break;
        case "4":
            console.log("Saindo..."); // !
            return; // Aqui o programa sai, pois a opção 'Sair' foi escolhida
        default:
            console.log("Opção inválida."); // !
    }
}

function iniciar() { // *
    let continuar = true;
    while (continuar) {
        menu();
        const opcaoFinalizar = prompt("Deseja continuar? (S para sim, qualquer outra tecla para não): ");
        if (opcaoFinalizar.toUpperCase() !== "S") {
            continuar = false;  // Se não for 'S', o loop é encerrado
        }
    }
}

iniciar(); // *
