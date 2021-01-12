import React from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  state = {
    listaAlunos: [],
    mudaLista: false
  };

  mostrarLista = () => {
    this.setState({mostraLista: !this.state.mostraLista});
  }

  pegarLista = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
        headers:{
          Authorization: "joao-leonardo-epps"
        }
    }
  )  
  };

  request.then((response) => {
    this.setState({listaAlunos: response.data})
  })

  .catch((error) => {
    alert("Não foi possivel exibir a lista")
  });
};

render() {
  return (
    <div className="App">
        {this.state.mostraLista? <Lista/> : <Cadastro/>}
        <button onClick={this.mostrarLista}>Ver Lista de Alunos</button>
      </div>
  );
}
}

export default App;