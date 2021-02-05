import React from "react";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import CreateTripPage from "../CreateTripPage";
import TripDetailsPage from "../TripDetailsPage";
import LoginPage from "../LoginPage";
import ApplicationFormPage from "../ApplicationFormPage";
import { BrowserRouter, Switch, Route } from "react-router-dom"; 

export function Router() {
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route exact path="/application-form">
            <ApplicationFormPage/>
        </Route>
        <Route exact path="/login">
            <LoginPage/>
        </Route>
        <Route exact path="/trips/create">
            <CreateTripPage/>
        </Route>
        <Route exact path="/trips/list">
            <ListTripsPage/>
        </Route>
        <Route exact path="/trips/details">
            <TripDetailsPage/>
        </Route>
        </Switch>
        </BrowserRouter>
    );
}