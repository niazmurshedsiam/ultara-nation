import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';
import Country from './component/Country/Country';

function App() {
  const [countries,setCountries]= useState([]);
  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data=>setCountries(data));

  },[])
  const handleAddCountry = (country) =>{console.log('add country',country)}
  return (
    <div className="App">
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
       
    </div>
  );
}

export default App;
