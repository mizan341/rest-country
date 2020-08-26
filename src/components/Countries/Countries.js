import React from 'react';
import './Countries.css'

const Countries = (props) => {
    const {name, area, altSpellings, currencies, flag, languages, population}=props.country;
    return (
        <div className="allItem">
            <div className='allInformation'>
                <div className='singleInfo'>
                    <div className='singleInfoDD'>
                        <h4>Country Name: {name}</h4>
                        <p>National Portal: {altSpellings[1]||altSpellings[0]}</p>
                        <img src={flag}/>
                    </div>
                    <div className='singleInfoDD'>
                        <p>Currencies: {currencies[0].name} {''}({currencies[0].symbol})</p>
                        <p>Languages: {languages[0].name}</p>
                        <p>Area: {area}</p>
                        <p>Population: {population}</p>
                    </div>
                </div>

                <button>Add Country</button>
        </div>
        </div>
    );
};

export default Countries;