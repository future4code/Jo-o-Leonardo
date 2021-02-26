import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateTripPage from "./Pages/CreateTripPage/index"
import LoginPage from "./Pages/LoginPage/index";
import ApplicationPage from "./Pages/ApplicationPage/index";
import TripDetailPage from "./Pages/TripDetailPage/index";
import TripsListPage from "./Pages/TripsListPage/index";
import HomePage from "./Pages/HomePage/index";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/login">
          <LoginPage/>
          </Route>
          <Route path="/viagens/detalhe">
          <TripDetailPage/>
          </Route>
          <Route path="/viagens/criar">
          <CreateTripPage/>
          </Route>
          <Route path="/viagens">
          <TripsListPage/>
          </Route>
          <Route path="/inscricao">
          <ApplicationPage/>
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
