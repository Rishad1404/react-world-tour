import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3}=country
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(true)
    }



    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color:visited?'purple':'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button><br />
            <button onClick={handleVisited}>Visited</button>
            {visited && 'I have visited this Country'}
            <hr />
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country; 