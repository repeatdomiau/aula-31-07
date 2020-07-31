import React from 'react';
import ListaProdutos from './ListaProduto';
import Carrinho from './Carrinho';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      produtos: [{ nome: 'teste1' }, { nome: 'teste2' }, { nome: 'teste3' }],
      carrinho: [{ nome: 'teste1' }]
    }
  }

  adicionarNoCarrinho = nome => () => {
    this.setState({ carrinho: [...this.state.carrinho, { nome: nome }] });
  }

  removerDoCarrinho = nome => () => {
    const carrinhoModificado = this.state.carrinho.filter(produto => produto.nome !== nome);
    this.setState({ carrinho: carrinhoModificado });
  }

  render() {

    const produtos = this.state.produtos.map(produto => {
      return { nome: produto.nome, adicionar: this.adicionarNoCarrinho(produto.nome) };
    });

    const produtosCarrinho = this.state.carrinho.map(produto => {
      return { nome: produto.nome, remover: this.removerDoCarrinho(produto.nome) };
    });

    return (
      <div className="app">
        <ListaProdutos produtos={produtos} />
        <Carrinho produtos={produtosCarrinho} />
      </div>
    );
  }
}

export default App;