import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";

export const GetTripDetailPage = () => {
  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-leonardo-epps/trip/dYQMafr821vsZby0xRkr",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Viagens:</h1>
      <h2>Nome: {trip.name}</h2>
      <h3>Onde: {trip.planet}</h3>
      <p>{trip.description}</p>
    </div>
  );
};
