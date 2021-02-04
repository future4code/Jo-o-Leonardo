import React from "react";
import axios from "axios";
import {baseUrl, axiosConfig} from './Parametros'

export class criaplaylist extends React.Component {
    state = {
        inputName: ""
    };

    criarPlaylist = () => {
        const body = {
            name: this.state.inputName,
            }

        axios.post(baseUrl, body, axiosConfig)
        .then((resposta) => {
            alert("Playlist criada com sucesso!")
            this.setState({inputName: '', inputEmail: ''})
        })
        .catch((erro) => {
            alert("Não foi possivel criar a Playlist!")
        })
    }

    pegaP = (event) => {
        this.setState({
        inputName: event.target.value
         })
    }
    pegaEmail = (event) => {
            this.setState({
            inputEmail: event.target.value
        })

    render() {
        return (
            <div className="novaPlaylist">
            <h1>Crie uma nova Playlist</h1>
            <p>Nome</p>
            <input onChange={this.pegaUsuario} value={this.state.inputName}/>
            <p>Email</p>
            <input onChange={this.pegaEmail} value={this.state.inputEmail}/>
            <button onClick={this.cadastroUsuario}>Salvar</button>
            </div>
        )
    }
}
