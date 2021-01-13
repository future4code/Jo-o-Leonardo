import React from "react";

export default class Etapa1 extends React.Component {

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
                </form>
            </div>
        );
    }
}
