function showUser({nome, idade}: {nome: string, idade: number}){
    console.log(nome);
    console.log(idade);
}

function showProduto(produto: {descricao: string, preco: number}){
    console.log(produto.descricao);
    console.log(produto.preco);
}

showUser({ nome: 'lylpol', idade: 22 });
showProduto({descricao: 'milk', preco: 22.8});


interface ProdutoValue{
    descricao: string
    preco?: number
}

function showProduto2({descricao, preco}: ProdutoValue){
    console.log(descricao);
    console.log(preco);
}

showProduto2({descricao: 'apple', preco: 12.23});