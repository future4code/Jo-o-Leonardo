import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../components/Hooks/useProtectedPage""

export const GetTripDetailPage = () => {
  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-teixeira-epps/trip/dYQMafr821vsZby0xRkr",
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
      <h1>Get trip detail</h1>
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>
    </div>
  );
};
