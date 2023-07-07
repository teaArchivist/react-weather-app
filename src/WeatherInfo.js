import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} size={64} />
                        </div>    
                        <WeatherTemperature celsius={props.data.temperature} />    
                           
                </div>
                </div>
                
                <div className="col-6">
                    <ul>
                        <li>
                            Feels Like:<span className="dayInfo"> {Math.round(props.data.feelslike)}°C</span>
                        </li>
                        <li>
                            Humidity:<span className="dayInfo"> {props.data.humidity}%</span>
                        </li>
                        <li>
                           Wind:<span className="dayInfo"> {props.data.wind} km/h</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
    )
}