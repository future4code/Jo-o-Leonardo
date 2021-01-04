import React from "react";
import Etapa2 from "./Etapa2";

export default class Etapa1 extends React.Component {

    irEtapa2 = () => {
        this.setState({ telaAtual: "Etapa2" });
      };

    render() {


        return (
            <div id="etapa1">
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <form>
                    <p>1. Qual o seu nome?</p>
                    <input />
                    <p>2. Qual a sua idade?</p>
                    <input />
                    <p>3. Qual seu email?</p>
                    <input />
                    <p>4. Qual sua escolaridade?</p>
                    <select name="escolaridade">
                        <option value="Ensino médio incompleto"/>
                        <option value="Ensino médio completo"/>
                        <option value="Ensino superior incompleto"/>
                        <option value="Ensino superior incompleto"/>
                    </select>
                    <button onClick{this.irEtapa2}>Próxima Etapa</button>
                    <p></p>
                    <button>Posts</button>

                    <button>Mensagens</button>
                    <button>Logout</button>
                </form>
            </div>
        );
    }
}

state = {
    telaAtual: "posts"
};

irParaMensagens = () => {
    this.setState({ telaAtual: "mensagens" });
};

irParaPosts = () => {
    this.setState({ telaAtual: "posts" });
};

render() {
    const renderizaTelaCorreta = () => {
        switch (this.state.telaAtual) {
            case "posts":
                return <Posts />;
            case "mensagens":
                return <Mensagens />;
            default:
                return <div>Erro! Página não encontrada</div>;
        }
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={this.irParaPosts}>Posts</button>
            <button onClick={this.irParaMensagens}>Mensagens</button>
            <button onClick={this.props.botaoLogout}>Logout</button>
            {renderizaTelaCorreta()}
        </div>