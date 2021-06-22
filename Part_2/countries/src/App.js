import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import CountriesForm from './components/CountriesForm'
import Countries from './components/Countries'


const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ countryFilter, setCountryFilter ] = useState("");

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const countryExists = countries.some((country) => country.name === countryFilter);
    
    if (countryExists) {
      findExistingCountry();
      resetCountryForm();
    }
  };

  const resetCountryForm = () => {
    setCountryFilter('');
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setCountryFilter(event.target.value);
  }

  const handleClick = (event) => {
    console.log(event.target.id);
    setCountryFilter(event.target.id);
  }

  const findExistingCountry = () => {
    countries.find((country) => country.name === countryFilter);
  };

  const filterCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(countryFilter.toLowerCase());
  })


  return (
    <div>
      <h2>Countries</h2>
      <CountriesForm
        onSubmit={(event) => handleSubmit(event)}
        nameValue={countryFilter}
        handleChange={(event) => handleChange(event)}
      />
      <h2>{countries.name}</h2>
      <Countries
        countries={filterCountries}
        handleClick={(event) => handleClick(event)}
      />

    </div>
  );
};

export default App;
