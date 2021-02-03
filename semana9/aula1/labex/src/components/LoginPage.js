import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
     history.push("/get")   
    }
  } []);
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/listTripsPage");
    }
  }, [history]);

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-leonardo-epps/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/listTripsPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Realize o Login abaixo:</h1>
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <br>
      <input value={password} onChange={handlePassword} placeholder="Senha" />
      <button onClick={login}>Entrar</button>
    </div>
  );
};
