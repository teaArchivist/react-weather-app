import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data);
    
}
    let apiKey = "b35c686ba9565ba0ab254c2230937552"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">
                        Thu
                    </div>
                    <WeatherIcon code="01d" size={32} />
                    <div className="Forecast-temp-max">
                    19°
                        <span className="Forecast-temp-min">
                        10°
                        </span>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}