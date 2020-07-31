import React from 'react';
import Filho from './Filho';

class Pai extends React.Component {

  constructor() {
    super();
    this.state = { alunos: ['Gabi', 'Ricardo', 'Bruno', 'José'] };
  }

  // alterarNomeNoIndice = (index, novoNome) => {
  //   let alunosModificado = [...this.state.alunos];
  //   alunosModificado[index] = novoNome;
  //   this.setState({alunos : alunosModificado});
  // }

  alterarNomeNoIndice = index => novoNome => {
    let alunosModificado = [...this.state.alunos];
    alunosModificado[index] = novoNome;
    this.setState({ alunos: alunosModificado });
  }

  removerNoNome = nome => () => {
    const alunosModificado = this.state.alunos.filter(aluno => aluno !== nome);
    this.setState({ alunos: alunosModificado });
  }

  render() {
    return (
      <div>
        {
          this.state.alunos.map((aluno, index) =>
            <Filho
              key={index}
              nome={aluno}
              setNome={this.alterarNomeNoIndice(index)}
              remover={this.removerNoNome(aluno)}
            />
          )
        }
      </div>
    );
  }

}

export default Pai;