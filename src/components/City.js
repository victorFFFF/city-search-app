import React, { Component } from "react";
import axios from "axios";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {cityName: "",
                  zipCodes: [],
                  outputZip: "",
                  isShow: false};
  }

  handleSubmit = ()=>{
    this.componentDidMount();
    let result = "";
    for(let i = 0; i < this.state.zipCodes.length; i++){
      if(i === 0 ) 
        result += "[ " + this.state.zipCodes[i] + ", ";
      else if(i === this.state.zipCodes.length - 1) 
        result += this.state.zipCodes[i] + " ]";
      else  
        result += this.state.zipCodes[i] + ", ";
    }
    this.setState({outputZip: result,isShow: true});
  }

  handleCityName = (evt)=>{
    let input = evt.target.value;
    let output = input.toUpperCase();
    this.setState({cityName: output});
  }

  componentDidMount (){
    axios
      .get("http://ctp-zip-api.herokuapp.com/city/" + this.state.cityName)
      .then((response) => {
        const data = response.data;

        // const newCityName = data;
        console.log(data.length);
        this.setState({ zipCodes: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let display;
    if(this.state.isShow){
      display = (
        <>
          <ul>
            <li> {this.state.outputZip}</li>
          </ul>
        </>
      );
    }
    
    return (
      <div>
        <div> 
        <label>Input city name:</label>
          <input type="text" name="city" placeholder={this.state.cityName} onChange = {this.handleCityName} />
          <button onClick={this.handleSubmit}>submit</button>
        </div>
        <br></br>
        <div className="CityName">Output the zip for city:{display}</div>
      </div>
    );
  }
}

export default City;
