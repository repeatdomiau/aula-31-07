import React from 'react';

const ItemCarrinho = function ({ nome, removerDoCarrinho }) {

  return (
    <li className="item-carrinho">
      <p>{nome}</p>
      <button onClick={removerDoCarrinho}>Remover</button>
    </li>
  )

};

export default ItemCarrinho;