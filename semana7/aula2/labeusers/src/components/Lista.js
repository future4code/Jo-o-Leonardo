import React from "react";
import "./styles.css";
import axios from "axios";

class Lista extends React.Component {
render() {
    const map = this.props.listaUsuario
  return (
    <div className="App">
        {this.state.mostraLista? <Lista/> : <Cadastro/>}
        <button onClick={this.mostrarLista}>Ver Lista de Alunos</button>
      </div>
  )
}
}

export default Lista;