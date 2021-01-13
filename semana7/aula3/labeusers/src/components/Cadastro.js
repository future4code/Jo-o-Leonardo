import React from "react";
import axios from "axios";
import {baseUrl, axiosConfig} from './Parametro'

export class Cadastro extends React.Component {
    state = {
        inputName: "",
        inputEmail: ""
    };

    cadastroUsuario = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

    
        axios.post(baseUrl, body, axiosConfig)
        .then((resposta) => {
            alert("Cadastrado com sucesso!")
            this.setState({inputName: '', inputEmail: ''})
        })
        .catch((erro) => {
            alert("Não foi possivel efetuar o cadastro!")
        })
    }

    pegaUsuario = (event) => {
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
            <div className="Cadastro">
            <p>Nome</p>
            <input onChange={this.pegaUsuario} value={this.state.inputName}/>
            <p>Email</p>
            <input onChange={this.pegaEmail} value={this.state.inputEmail}/>
            <button onClick={this.cadastroUsuario}>Salvar</button>
            </div>
        )
    }
}
