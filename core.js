const produtos = require("./produtos");

let filtraParametros = (valorMenor, valorMaior, qualidadeMinima, status) =>{
    let filtra = produtos.filter((filtro) =>{
        return (filtro.valor < valorMaior && filtro.valor > valorMenor) &&
               (filtro.qualidade > qualidadeMinima) &&
               (filtro.status === status);
    });

    return filtra;
}

let carrinho = filtraParametros(482, 1600, 6, true);

let valorTotal = carrinho.reduce((acumulador, item) => {
        return acumulador + item.valor;
    }, 0);


let exibirCarrinho = (carrinho) => {
    carrinho.forEach((item) => {
        console.log(`${item.nome}, valor R$ ${item.valor}.`)
    })
}

exibirCarrinho(carrinho)
console.log(`\nO valor total do carrinho fica em R$: ${valorTotal.toFixed(2)}.`)