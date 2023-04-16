function showUser(_a) {
    var nome = _a.nome, idade = _a.idade;
    console.log(nome);
    console.log(idade);
}
function showProduto(produto) {
    console.log(produto.descricao);
    console.log(produto.preco);
}
showUser({ nome: 'lylpol', idade: 22 });
showProduto({ descricao: 'milk', preco: 22.8 });
function showProduto2(_a) {
    var descricao = _a.descricao, preco = _a.preco;
    console.log(descricao);
    console.log(preco);
}
showProduto2({ descricao: 'apple', preco: 12.23 });
