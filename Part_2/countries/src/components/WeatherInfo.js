import React from "react";

const WeatherInfo = ({ condition }) => {
  return (
    <div>
      {!condition ? (
        <p>...</p>
      ) : (
        <>
        <h3>Weather in {condition.location.name}</h3>
            <div>
                <span>
                    <strong>Weather Description: </strong>
                    {condition.current.weather_descriptions[0]}
                </span>
            </div>
            <div>
                <img 
                    src={condition.current.weather_icons[0]}
                    alt={"Weather icon"}
                ></img>
            </div>
            <div>
                <span>
                    <strong>Temperature:</strong>
                    {condition.current.temperature}℃
                </span>
            </div>
            <div>
                <span>
                    <strong>Wind: </strong>
                        {condition.current.wind_speed} m/s, Direction:{" "}
                        {condition.current.wind_dir}
                </span>  
            </div>
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
