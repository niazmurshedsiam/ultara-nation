import React from 'react';

const Country = (props) => {
    console.log(props);
    const {name,region,population,flag} = props.country;
    
    return (
        <div>
           <h1>{name}</h1>
           <img style={{height:'50px'}} src={flag} alt=""/>
           <p>{population}</p>
           <p>{region}</p>
        </div>
    );
};

export default Country;