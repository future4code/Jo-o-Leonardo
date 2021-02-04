import React from 'react'
import Router from "./routes/Router";
import useInput from "./Hooks/useInput";


  function FormApplication() {
    const [name, onChangeName] = useInput("");
    const [age, onChangeAge] = useInput("");
    const [applicationText, onChangeApplicationText] = useInput("");
    const [profession, onChangeProfession] = useInput("");
    const [country, onChangeCountry] = useInput("")
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      const body = {
        name: name,
        age: age,
        applicationText: applicationText,
        profession: profession, 
        country: country
      };
  
      makePostRequest = (body) => {
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply")
    
        .then((response) => {
            alert("aplicação efetuada com sucesso!")
        }).catch((error) => {
            console.log(error.message)
        })
    
      };
    
    return (
      <div className="App">
          <h1>Cadastro de viagem:</h1>
        <form onSubmit={onSubmitForm}>
          <input
            type={"name"}
            placeholder={"name"}
            value={name}
            onChange={onChangeName}
            required
          />
        <select type={planet} onChange={onChangePlanet}id="planet">
            <option value=""></option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
        </select>
          <input
            type={"planet"}
            placeholder={"planet"}
            value={planet}
            onChange={onChangePlanet}
            required
          />
          <input
            type={"date"}
            placeholder={"date"}
            value={date}
            onChange={onChangedate}
            required
          />
          <input
            type={"description"}
            placeholder={"description"}
            value={description}
            onChange={onChangeDescription}
            required
          />
          <input
            type={"durationInDays"}
            placeholder={"durationInDays"}
            value={durationInDays}
            onChange={onChangeDurationInDays}
            required
          />
          <button>Enviar Aplicação</button>
        </form>
      </div>
    );
  }