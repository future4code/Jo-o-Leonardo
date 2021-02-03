

import React from "react";
import "./styles.css";
import axios from "axios";
import { Cadastro } from "./components/Cadastro";
import { Lista } from "./components/Lista"
import 
  import { ReactComponent } from "*.svg";

export default class App extends React.Component {
  state = {
    mudaLista: true
  };

  mostrarLista = () => {
    this.setState({mostraLista: !this.state.mostraLista});
  };

  render() {
    return (
      <div className="App">
          {this.state.mostraLista? <Lista/> : <Cadastro/>}
          <button onClick={this.mostrarLista}>Proxima pagina</button>
        </div>
    );
  }
}