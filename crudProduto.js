var listaDeProdutos = []
var produto
var objetoAtual
var posicao = -1

var nomeInput = document.getElementById("nomeProduto")
var precoInput = document.getElementById("precoProduto")
var nomeAlterarInput = document.getElementById("nomeBuscaAlter")
var nomeDeletarInput = document.getElementById("nomeBuscaDel")
var precoNovoInput = document.getElementById("precoNovo")

function cadastrar() {
    listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    if (listaDeProdutos == null) {
        listaDeProdutos = []
        produto = {
            nome: nomeInput.value,
            preco: precoInput.value
        }
        listaDeProdutos.push(produto)
        localStorage.setItem("produtosLoja", JSON.stringify(listaDeProdutos))
        alert('Produto cadastrado!')
    } else {
        produto = {
            nome: nomeInput.value,
            preco: precoInput.value
        }
        listaDeProdutos.push(produto)
        localStorage.setItem("produtosLoja", JSON.stringify(listaDeProdutos))
        alert('Produto cadastrado!')
    }
}

function listar() {
    listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    var stringPrint = ''
    for (i = 0; i < listaDeProdutos.length; i++) {
        objetoAtual = listaDeProdutos[i]
        stringPrint += `${i + 1}º produto: ${JSON.stringify(objetoAtual)} <br>`
    }

    document.querySelector('#listar').innerHTML = stringPrint

}

function alterarValorDoProduto() {
    listaDeProdutos = localStorage.getItem("produtosLoja")
    var nomeAlterar = nomeAlterarInput.value
    var precoNovo = precoNovoInput.value
    if (acharProdutoPorNome(nomeAlterar)) {
        for (i = 0; i < listaDeProdutos.length; i++) {
            objetoAtual = listaDeProdutos[i]
            if (objetoAtual.nome == nomeAlterar) {
                objetoAtual.preco = precoNovo
                localStorage.setItem("produtosLoja", JSON.stringify(listaDeProdutos))
            }
        }
        alert('Preço atualizado!')
    } else {
        alert(`Produto [${nomeAlterar}] não encontrado!`)
    }

}

function deletar() {
    listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    var nomeDeletar = nomeDeletarInput.value
    if (acharProdutoPorNome(nomeDeletar)) {
        for (i = 0; i < listaDeProdutos.length; i++) {
            objetoAtual = listaDeProdutos[i]
            if (objetoAtual.nome == nomeDeletar) {
                listaDeProdutos.splice(i, 1)
                localStorage.setItem("produtosLoja", JSON.stringify(listaDeProdutos))
            }
        }
        alert('Produto deletado')
    } else {
        alert(`Produto [${nomeDeletar}] não encontrado!`)
    }
}


function acharProdutoPorNome(nomeBusca) {
    listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    var retorno = false
    for (i = 0; i < listaDeProdutos.length; i++) {
        objetoAtual = listaDeProdutos[i]
        if (objetoAtual.nome == nomeBusca) {
            this.posicao = i
            retorno = true
        }
    }
    return retorno
}