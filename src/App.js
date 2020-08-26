import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  // const first10 = fakeData.slice(0, 10);
  const [country, setCountry] = useState([]);
  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res=> res.json())
    .then(data=>{
      setCountry(data)
      console.log(data)
      })
      
  }, [])
  return (
    <div className='mainBody'>
        <div className='subBody'>
          <h1>country: {country.length}</h1>
          <div className='allCountry'>
          
          {
            country.map(country=><Countries country={country} key={country.alpha3Code}></Countries>)
          }
        
            
          </div>
      </div>
    </div>
  );
}

export default App;
