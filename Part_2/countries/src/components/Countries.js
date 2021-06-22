import React from'react';
import Weather from './Weather';


const Country = ({ country }) => {
    const languageList = country.languages.map((lang) => {
        return <li key={lang.iso639_2}>{lang.name}</li>; 
    })

    const timezonesList = country.timezones.map((time, idx) => {
        return <span key={idx}>{time}</span>;
    })
    return (
        <div>
            <span></span>
            <h2>{country.name}</h2>
            <div>
                <span>
                    <strong>Capital: </strong>
                    {country.capital}
                </span>
                <br />
                <span>
                    <strong>Population: </strong>
                    {country.population}
                </span>
                <br />
                <span>
                    <strong>Region: </strong>
                    {country.region}
                </span>
                <br />
                <span>
                    <strong>Subregion: </strong>
                    {country.subregion}
                </span>
                <br />
                <span>
                    <strong>Timezones: </strong>
                    {timezonesList}
                </span>
                <br />
            </div>
            
            <div>
                <h3>Languages: </h3>
                <ul>{languageList}</ul>
            </div>

            <div>
                <img
                style={{ margin: "20px 0" }}
                alt={`${country.name} Flag`}
                width={"200px"}
                src={country.flag}>
                </img>
            </div>

            <Weather 
            query={country.capital}
            />
        </div>
    );
};


const Countries = (props) => {
    const tooManyCountries = props.countries.length > 10;
    const multipleCountries = props.countries.length > 1 && props.countries.length <= 10;
    const singleCountry = props.countries.length === 1;
    const countriesList = props.countries.map((country) => {
        return (
            <div key={country.alpha3Code}>
                {country.name}{" "}
                <button onClick={props.handleClick} id={country.name}>
                    Show
                </button>
            </div>
        );
    });

    return (
        <div>
            {tooManyCountries && "Too many matches, specify another filter"}
            {multipleCountries &&
            <div>{countriesList}</div>}
            {singleCountry &&
            <Country
            country={props.countries[0]}
            />}
            
        </div>
    );
};



// key={country.alpha3Code}
//             name={country.name}
//             capital={country.capital}
//             population={country.population}
//             flag={country.flag}
//             languages={country.languages}
export default Countries