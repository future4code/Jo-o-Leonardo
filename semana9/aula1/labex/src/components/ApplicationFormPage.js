import React from 'react'
import Router from "../src/components/Router/Router";
import useInput from "./Hooks/useInput";
import { goToApplicationFormPage } from './Router/Coordinator';


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
    }  
  
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
        <form onSubmit={onSubmitForm}>
          <input
            type={"name"}
            placeholder={"name"}
            value={name}
            onChange={onChangeName}
            required
          />
          <input
            type={"age"}
            placeholder={"age"}
            value={age}
            onChange={onChangeAge}
            required
          />
          <input
            type={"applicationText"}
            placeholder={"applicationText"}
            value={applicationText}
            onChange={onChangeApplicationText}
            required
          />
          <input
            type={"profession"}
            placeholder={"profession"}
            value={profession}
            onChange={onChangeProfession}
            required
          />
          <input
            type={"country"}
            placeholder={"country"}
            value={country}
            onChange={onChangeCountry}
            required
          />
          <button>Enviar Aplicação</button>
        </form>
      </div>
    )
  }

  export default goToApplicationFormPage;
