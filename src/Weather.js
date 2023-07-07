import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready:false });
const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        feelslike: response.data.main.feels_like,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description
    });
    
}

function search() {
    const apiKey = "b35c686ba9565ba0ab254c2230937552"
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();

}

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-50" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
    )
} else {
search();
return "Loading...";
}

}