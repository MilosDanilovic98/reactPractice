import React from "react";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

const apiKey = "8fd74a7ee848556ade3c4b4ebfa8b4e7";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celcius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };
    this.getWeather();
  }
  calculateTemp(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  getWeather = async () => {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
    );
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country,
      celcius: this.calculateTemp(response.main.temp),
      temp_max: this.calculateTemp(response.main.temp_max),
      temp_min: this.calculateTemp(response.main.temp_min),
      description: response.weather[0].description,
    });
  };
  render() {
    return (
      <Weather
        city={this.state.city}
        country={this.state.country}
        celcius={this.state.celcius}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        description={this.state.description}
        weatherIcon={this.state.weatherIcon}
      ></Weather>
    );
  }
}

export default App;
