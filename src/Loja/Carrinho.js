import React from 'react';
import ItemCarrinho from './ItemCarrinho';

const Carrinho = function ({ produtos }) {

  return (
    <ul className='carrinho'>
      {produtos.map((produto, index) =>
        <ItemCarrinho key={index} nome={produto.nome} removerDoCarrinho={produto.remover} />
      )}
    </ul>
  )
}

export default Carrinho;