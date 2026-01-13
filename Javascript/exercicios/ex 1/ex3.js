//Filtro de Inventário: Dado um array de objetos de produtos (ex: { nome: "Teclado", preco: 150, estoque: 5 }),
//  crie uma função que retorne apenas os produtos que custam mais de R$ 100,00 e estão em estoque

// 1. Criamos um array vazio para guardar os objetos dos produtos
let produtos = [];

// Vamos cadastrar apenas 3 para o exemplo ser rápido
for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do produto:");
    let preco = Number(prompt("Digite o preço:")); // Convertemos string para número
    let estoque = Number(prompt("Digite o estoque:"));

    // Guardamos tudo como um objeto dentro do array
    produtos.push({ nome: nome, preco: preco, estoque: estoque });
}

// 2. Função que filtra os produtos
function filtrarProdutos(lista) {
    let resultado = []; // Criamos um array para guardar os selecionados

    for (let j = 0; j < lista.length; j++) {
        // Se o preço > 100 E estoque > 0
        if (lista[j].preco > 100 && lista[j].estoque > 0) {
            resultado.push(lista[j].nome); // Adiciona o nome ao resultado
        }
    }
    return resultado; // Retorna a lista completa de nomes encontrados
}

// 3. Colocamos o retorno da função dentro de uma variável
let produtosFiltrados = filtrarProdutos(produtos);