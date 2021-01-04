import React from "react";
import "./styles.css";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export default class App extends React.Component {
  state = {
    estaLogado: false
  };

  fazerLogin = () => {
    this.setState({ estaLogado: true });
  };

  fazerLogout = () => {
    this.setState({ estaLogado: false });
  };

  render() {
    const renderizaTelaCorreta = () => {
      if (this.state.estaLogado) {
        return <Home botaoLogout={this.fazerLogout} />;
      } else {
        return <Login botaoLogin={this.fazerLogin} />;
      }
    };

    return <div className="App">{renderizaTelaCorreta()}</div>;
  }
}
