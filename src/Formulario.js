import React from 'react';

class Formulario extends React.Component {

  constructor() {
    super();
    this.state = { nome: '', idade: '', email: '', estudante: false, opcao: 1 };
  }

  setStateForProperty = (stateProp) => (evt) => this.setState({ [stateProp]: evt.target.value });

  setStateForProperty2 = (nomePropriedade, evt) => this.setState({ [nomePropriedade]: evt.target.value });

  render() {
    return (
      <form onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="nome">Nome:</label>
        <input id="nome" type="text" value={this.state.nome} onChange={this.setStateForProperty("nome")} />
        <label htmlFor="idade">Idade:</label>
        <input id="idade" type="text" value={this.state.idade} onChange={this.setStateForProperty("idade")} />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={this.state.email} onChange={evt => this.setStateForProperty2("email", evt)} />
        <label htmlFor="estudante">Estudante?</label>
        <input type="checkbox" id="estudante" checked={this.state.estudante} onChange={evt => this.setState({ estudante: evt.target.checked })} />
        <select value={this.state.opcao} onChange={this.setStateForProperty("opcao")}>
          <option value="">Selecione...</option>
          <option value="1">teste</option>
          <option value="2">teste2</option>
        </select>
        <button onClick={() => console.log(this.state)}>Submeter</button>
      </form>
    );
  }
}

export default Formulario;