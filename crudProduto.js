/*Criação de uma página WEB, onde será possível realizar o cadastro de um produto de uma loja, alterar o valor desse produto, deletar o produto da prateleira e apresentar a lista dos produtos para os clientes na página.

Tudo isso deverá ser realizado em uma única página.

Itens obrigatórios:

- Criação de um array de objetos para armazenar os produtos. Deverá ser armazenados dentro do LocalStorage com a chave "produtosLoja". (3,0)
- Criação da página HTML para apresentar / alterar / cadastrar / deletar os produtos. (2,0)
- Função para listar os produtos. (1,0)
- Função para alterar o valor de um produto, deverá buscar cada produto pelo seu nome. (2,0)
- Função para deletar um produto. (1,0)
- Função para cadastrar um produto. (1,0)*/

var listaDeProdutos = []
var listaCopiaLocalStorage = []

var nomeInput = document.getElementById("nomeProduto")
var precoInput = document.getElementById("precoProduto")


function cadastrar() {
    listaCopiaLocalStorage = JSON.parse(localStorage.getItem("produtosLoja"))
    if(listaCopiaLocalStorage == null){
        listaDeProdutos = []
    } else {
        listaDeProdutos = listaCopiaLocalStorage
    }

    var produto = {
        nome: nomeInput.value,
        preco: precoInput.value
    }

    listaDeProdutos.push(JSON.stringify(produto))
    localStorage.setItem("produtosLoja", JSON.stringify(listaDeProdutos))
}

function listar() {
    listaCopiaLocalStorage = JSON.parse(localStorage.getItem("produtosLoja"))
    var stringPrint = ''
    var objetoAtual
    
    for(i = 0; i < listaCopiaLocalStorage.length; i++){
        objetoAtual = listaCopiaLocalStorage[i]

        stringPrint += `${i+1}º produto: ${JSON.stringify(objetoAtual)} <br>`
    }  

    document.querySelector('#listar').innerHTML = stringPrint
    
}

function alterarValorDoProduto() {

}

function deletar() {
    
}

function listarProdutoPorNome() {
    
}