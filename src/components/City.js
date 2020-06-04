import React, { Component } from "react";
import axios from "axios";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { cityName: null };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.props.name)
      .then((response) => {
        const data = response.data;

        const newCityName = {
          name: data.name,
          imageUrl: data.sprites.front_default,
        };

        this.setState({ cityName: newCityName });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let display;
    if (!this.state.pokemon) {
      display = <p>Loading...</p>;
    } else {
      display = (
        <>
          <img
            src={this.state.pokemon.imageUrl}
            alt={this.state.pokemon.name}
          />
          <ul>
            <li>{this.state.pokemon.name} </li>
          </ul>
        </>
      );
    }

    return <div className="CityName">{display}</div>;
  }
}

export default City;
