import React from 'react';
import Produto from './Produto';

const ListaProdutos = function ({ produtos }) {

  return (
    <div className='produtos'>
      {produtos.map((produto, index) =>
        <Produto key={index} nome={produto.nome} adicionarNoCarrinho={produto.adicionar} />
      )}
    </div>
  )
}

export default ListaProdutos;