import React from "react";
import Etapa3 from "./Final";

export default class Etapa3 extends React.Component {

    irFinal = () => {
        this.setState({ telaAtual: "Final" });
      };

    render() {


        return (
            <div id="etapa3">
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <form>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input />
                    <p>6. Você fez algum curso complementar?</p>
                    <select name="cursos">
                    <option value="Nenhum"/>
                    <option value="Curso técnico"/>
                    <option value="Curso de inglês"/>
                    </select>
                    <button onClick={this.irFinal}>Próxima Etapa</button>
                </form>
            </div>
        );
    }
}
