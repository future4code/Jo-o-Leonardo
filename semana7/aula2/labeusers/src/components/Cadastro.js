import React from "react";
import "./styles.css";
import axios from "axios";

class Cadastro extends React.Component {
    state = {
        inputName: "",
        inputEmail: ""
    };

    cadastroUsuario = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
    };

    const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
            headers: {
                Authorization: "joao-leonardo-epps"
            }
        }
    )

    request
    .then((resposta) =>{
        alert("Cadastrado com sucesso!")
    })

    .catch((erro) =>{
        alert("Não foi possivel cadastrar o usuario")
    })

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
            <input onChange={this.pegaUsuario} value={this.state.valorInput}/>
            <p>Email</p>
            <input onChange={this.pegaEmail} value={this.state.valorInput}/>
            <button onClick={this.cadastroUsuario}>Salvar</button>
            </div>
        )
    }
}
    
export default Cadastro;