import React from'react'

const CountriesForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Find Countries:</label>
                    <input
                        id="Finder"
                        value={props.nameValue}
                        onChange={props.handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default CountriesForm