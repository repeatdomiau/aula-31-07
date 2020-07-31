import React from 'react';

const Produto = function ({ nome, adicionarNoCarrinho }) {

  return (
    <div className="card-produto">
      <p>{nome}</p>
      <button onClick={adicionarNoCarrinho}>Comprar</button>
    </div>
  )
};

export default Produto;