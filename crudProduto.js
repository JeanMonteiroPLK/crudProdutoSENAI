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
    validaListaDoLocalStorage()
    var campoNome = "NOME"
    var campoPreco = "PREÇO"
    if (ehInputVazio(nomeInput.value)) {
        alert(`Campo [${campoNome}] não pode ser vazio!`)
    } else {
        if (ehInputVazio(precoInput.value)) {
            alert(`Campo [${campoPreco}] não pode ser vazio!`)
        } else {
            produto = {
                nome: nomeInput.value,
                preco: precoInput.value
            }
            this.listaDeProdutos.push(produto)
            localStorage.setItem("produtosLoja", JSON.stringify(this.listaDeProdutos))
            alert('Produto cadastrado!')
        }
    }
}

function listar() {
    listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    var cabecalho = '<<< PRODUTOS >>> <br>'
    var stringPrint = ''
    for (i = 0; i < listaDeProdutos.length; i++) {
        objetoAtual = listaDeProdutos[i]
        stringPrint += `<br> #${i + 1} 
        <br>NOME: ${objetoAtual.nome} 
        <br>PREÇO: R$${objetoAtual.preco} <br>`
    }

    document.querySelector('#listar').innerHTML = cabecalho + stringPrint

}

function alterarValorDoProduto() {
    this.listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    var nomeAlterar = nomeAlterarInput.value
    var campoNomeAlterar = 'PRODUTO PARA ATUALIZAR'
    var precoNovo = precoNovoInput.value
    var campoNovoPreco = 'NOVO PREÇO'
    if (ehInputVazio(nomeAlterar)) {
        alert(`Campo [${campoNomeAlterar}] não pode ser vazio!`)
    } else {
        if (ehInputVazio(precoNovo)) {
            alert(`Campo [${campoNovoPreco}] não pode ser vazio!`)
        } else {
            if (acharProdutoPorNome(this.listaDeProdutos, nomeAlterar)) {
                this.listaDeProdutos[posicao].preco = precoNovo
                localStorage.setItem("produtosLoja", JSON.stringify(this.listaDeProdutos))
                alert('Preço atualizado!')
            } else {
                alert(`Produto [${nomeAlterar}] não encontrado!`)
            }
        }
    }
}

function deletar() {
    this.listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    var nomeDeletar = nomeDeletarInput.value
    var campoNomeDeletar = 'PRODUTO PARA DELETAR'
    if (ehInputVazio(nomeDeletar)) {
        alert(`Campo [${campoNomeDeletar}] não pode ser vazio!`)
    } else {
        if (acharProdutoPorNome(this.listaDeProdutos, nomeDeletar)) {
            this.listaDeProdutos.splice(posicao, 1)
            localStorage.setItem("produtosLoja", JSON.stringify(this.listaDeProdutos))
            alert('Produto deletado')
        } else {
            alert(`Produto [${nomeDeletar}] não encontrado!`)
        }
    }
}


function acharProdutoPorNome(lista, nomeBusca) {
    lista = JSON.parse(localStorage.getItem("produtosLoja"))
    var retorno = false
    for (i = 0; i < lista.length; i++) {
        objetoAtual = lista[i]
        if (objetoAtual.nome == nomeBusca) {
            this.posicao = i
            retorno = true
        }
    }
    return retorno
}

function validaListaDoLocalStorage() {
    this.listaDeProdutos = JSON.parse(localStorage.getItem("produtosLoja"))
    if (this.listaDeProdutos == null) {
        this.listaDeProdutos = []
    }
}

function ehInputVazio(input) {
    if (input == '' || input == null || input == undefined) {
        return true
    } else {
        return false
    }
}
