import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,country)=>sum+country.population,0)
    return (
        <div>
            <h1>This is Cart : {cart.length}</h1>
            <p>Total population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;