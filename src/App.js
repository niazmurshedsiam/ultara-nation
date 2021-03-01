import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Country/Cart/Cart';

function App() {
  const [countries,setCountries]= useState([]);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data=>setCountries(data));

  },[])
  const handleAddCountry = (country) =>{
    const newCart = [...cart,country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <h4>Country added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
       
    </div>
  );
}

export default App;
