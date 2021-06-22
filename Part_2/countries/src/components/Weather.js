import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'


const Weather = ({ query }) => {
    const [ condition, setCondition ] = useState(null);

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`)
          .then((respose) => {
            const apiResponse = respose.data;
            console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
            setCondition(respose.data);
          })
          .catch((error) => {
              console.log(error);
          });
    }, [query]);
    
    return (
        <div>
            <WeatherInfo condition={condition}/>
        </div>
    )
    
};

export default Weather