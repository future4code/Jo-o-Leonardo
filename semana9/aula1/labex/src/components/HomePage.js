import React from "react";
import Router from "./Router/Router"
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage, goToLoginPage } from "./Router/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => goToApplicationFormPage(history)}>
        <p>Inscreva-se em uma de nossas viagens</p>
      </button>
      <button onClick={() => goToLoginPage(history)}>
        <p>Login Administrativo</p>
      </button>
    </div>
  );
};

export default HomePage;
