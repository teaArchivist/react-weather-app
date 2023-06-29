import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);
function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}
    
if (loaded) {
    
    return (
    <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
        </div>
    )
} else {
    let apiKey = "b35c686ba9565ba0ab254c2230937552"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

return null;
    }
}