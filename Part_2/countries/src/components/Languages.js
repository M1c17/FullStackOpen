import React from'react'

const Language = (props) => {
    return (
        <div>
            <span></span>
            <li>{props.name}</li>
        </div>
    )
}

const Languages = ({ languages }) => {
    const languageList = languages.map((lang) => {
        return (
            <Language
            key={lang.iso639_1}
            name={lang.name}
            />
        );
    });

    return (
        <div>
            <h3>Languages: </h3>
            <ul>{languageList} </ul>
        </div>   
    );
};


export default Languages