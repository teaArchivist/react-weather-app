import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
            </form>
            <h1>Lisbon</h1>
            <ul>
                <li>
                    Friday 03:37
                </li>
                <li>
                    Mostly cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="" target="_blank" alt="#" />
                    6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation:  40%
                        </li>
                        <li>
                            Humidity:  90%
                        </li>
                        <li>
                            Wind:  17 km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}