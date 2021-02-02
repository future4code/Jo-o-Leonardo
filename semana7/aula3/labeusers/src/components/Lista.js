import React from "react";
import "./styles.css";
import axios from "axios"
import {baseUrl, axiosConfig} from './Parametro'

export class Lista extends React.Component {
  state = {
    listaUsuario: []
  }

  componentDidMount = () => {
    this.pegaOsUsuarios()
  }

  pegaOsUsuarios = async () => {
    try {
      const resposta = await axios.get(baseUrl, axiosConfig)
      this.setState({listaUsuario: resposta.data})
    } catch(error) {
      console.log(error)
    }
  }
  
  deletaOsUsuarios = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then(res) => {
      this.pegaOsUsuarios()
    })
    .catch((err) => {
      console.log(err)
    })

  render() {
    return (
      <div>
        <h2>Lista de usuários</h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <p>{user.name}</p>
              <button onClick={() => {this.deleteUser(user.id)}}>X</button>
            </div>
          )
        })}
      </div>
    );
  }
}