import React from "react";
import "./styles.css";
import axios from 'axios'
import {baseUrl, axiosConfig} from './Components/parametros'

export default class App extends React.Component {
  state = {
    movies: [],
    image: '',
    genre: ''
  }
  
  componentDidMount = () => {
    this.getMovies()
  }

  getMovies = async () => {
    try {
      const resposta = await axios.get(baseUrl, axiosConfig)
      this.setState({movies: resposta.data.results})
      console.log(resposta)
    } catch(error) {
      console.log(error)
    }
  }

  getImage = (event) => {
    const url = event.target.value
    axios.get(url)
    .then((res) => {
      this.setState({image: res.data.sprites.front_default})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Bem vindo ao Movie DB</h1>
        <h2>Selecione um genero</h2>
        <select>
          <option></option>
          {this.state.movies.map((generos) => {
            return (
              <option key={genres.id} value={genres.id}>{genres.name}</option>
            )
          })}
        </select>
      </div>
    );
  }
}