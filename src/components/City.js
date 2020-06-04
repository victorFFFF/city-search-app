import React, { Component } from "react";
import axios from "axios";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { cityName: "" };
  }

  handleSubmit(){

  }

  handleCityName = (evt)=>{
    let input = evt.target.value;
    let output = input.toUpperCase();
    this.setState({cityName: output});
    console.log(this.state.cityName);
  }

  // componentDidMount() {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/" + this.props.name)
  //     .then((response) => {
  //       const data = response.data;

  //       const newCityName = {
  //         name: data.name,
  //         imageUrl: data.sprites.front_default,
  //       };

  //       this.setState({ cityName: newCityName });
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    let display;
    
      display = (
        <>
          <ul>
            <li>{this.state.cityName} </li>
          </ul>
        </>
      );
    

    return (
      <div>
        <div> 
        <label>Input city name:</label>
          <input type="text" name="city" placeholder={this.state.cityName} onChange = {this.handleCityName} />
          <button onClick={() => this.handleSubmit(this.state)}>submit</button>
        </div>
        <br></br>
        <div className="CityName">Output the zip for city:{display}</div>
      </div>
    );
  }
}

export default City;
