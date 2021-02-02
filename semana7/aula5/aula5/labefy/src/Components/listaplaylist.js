import React from "react";
import "./styles.css";
import axios from "axios"
import {baseUrl, axiosConfig} from './Parametros'

export class listaplaylist extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.pegaOsplaylists()
  }

  pegaplaylists = async () => {
    try {
      const resposta = await axios.get(baseUrl, axiosConfig)
      this.setState({playlists: resposta.data})
    } catch(error) {
      console.log(error)
    }
  }
 
  render() {
    return (
      <div>
        <h2>Suas Playlists:</h2>
        {this.state.playlist.map((p) => {
          return (
            <div>
              <h3>{playlist.name}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}