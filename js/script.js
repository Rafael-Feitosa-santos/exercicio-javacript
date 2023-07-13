
let usuario = prompt('Digite o seu usuário:');
let senha = prompt('Digite a sua senha:');

//chegando usuário e senha
if (usuario === "user" && senha === "123") {
    console.log('Login efetuado com sucesso!');

    // Sortenando o produto
    let numeroProduto = Math.floor(Math.random() * 4) + 1;
    let nomeProduto;

    // Atribuindo o nome do produto de acordo com o número sorteado
    switch (numeroProduto) {
        case 1:
            nomeProduto = "Notebook";
            break
        case 2:
            nomeProduto = "Tablet";
            break
        case 3:
            nomeProduto = "Celular";
            break
        case 4:
            nomeProduto = "Videogame";
            break
        default:
            console.log('Produto inválido');
    }

    // Gerando o valor do produto
    let precoProduto = Math.ceil(Math.random() * 5000);
    while (precoProduto < 1200) {
        precoProduto = Math.ceil(Math.random() * 5000);
    }

    // Gerando o valor do frete caso o preço do produto seja menor que 1600
    let precoFrete = 0;
    if (precoProduto < 1600) {
        precoFrete = 37.50;
    }

    // Gerando o desconto sorteado
    let percentualDesconto = (Math.floor(Math.random() * 9)) + 1;
    let desconto = (precoProduto * percentualDesconto) / 100;

    // Calculando o preço final com o desconto e o valor do frete
    let precoFinal = precoProduto - desconto + precoFrete;

    // Exibindo
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Preço do produto: R$${precoProduto.toFixed(2)}`);
    console.log(`Desconto de ${percentualDesconto}%: ${desconto.toFixed(2)}`);
    console.log(`Valor do frete: R$${precoFrete.toFixed(2)}`);
    console.log(`Total a pagar: R$${precoFinal.toFixed(2)}`);

    // Parcelando o preço final e exibindo as 4 parcelas
    console.log(`Preço final em 4x sem juros`);
    for (let i = 1; i <= 4; i++) {
        let parcela = precoFinal / 4;
        console.log(`Parcelas ${i}: R$${parcela.toFixed(2)}`);
    }
    console.log("Obrigado por comprar conosco!!");
}

else {
    console.log('Usuário ou senha inválido!');
}
