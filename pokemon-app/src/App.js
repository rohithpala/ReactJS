import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  getPokemonData = async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon/" + document.querySelector(".pokemon").value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <select className="pokemon">
          <option value="pikachu">Pikachu</option>
          <option value="charizard">Charizard</option>
          <option value="squirtle">Squirtle</option>
        </select>

        <button className="get-data-button" onClick={this.getPokemonData}>Get Data</button>
      </React.Fragment>
    );
  }
}

export default App;
