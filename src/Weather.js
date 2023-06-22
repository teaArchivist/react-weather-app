import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready:false });
function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,
        data: new Date(response.data.dt * 1000),
        icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        description: response.data.weather[0].description
    });
    
}

if (weatherData.ready) {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter a city..."
                className="form-control"
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-50" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.icon} target="_blank" alt={weatherData.description}
                    />
                   <span className="today-temp">{Math.round(weatherData.temperature)}</span>
                   <span className="unit"> °C</span> 
                </div>
                </div>
                
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                           Wind: {weatherData.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
} else {
const apiKey = "b35c686ba9565ba0ab254c2230937552"
let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

return "Loading...";
}

}