import React from 'react';

const Filho = function ({ nome, setNome, remover }) {

  return (
    <div>
      <input type="text" value={nome} onChange={evt => setNome(evt.target.value)} />
      <button onClick={remover}>Remover</button>
    </div>
  );

}

export default Filho;