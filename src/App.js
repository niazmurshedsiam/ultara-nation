import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {
  const [countries,setCountries]= useState([]);
  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data=>setCountries(data));

  },[])
  return (
    <div className="App">
      <h1>This is country {countries.length}</h1>
      <ul>
        {
           countries.map(country=><li>{country.name} {country.capital} {country.population}</li>)
           
        }
       </ul>
    </div>
  );
}

export default App;
