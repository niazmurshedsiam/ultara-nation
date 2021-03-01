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
  return (
    <div className="App">
        {
          countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
        }
       
    </div>
  );
}

export default App;
