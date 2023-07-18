import React, { useState, useEffect } from 'react';
import './CountryInfo.css';

function CountryInfo(props) {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    if (props.country) {
      fetch(`/api/country/${props.country}`)
        .then(res => res.json())
        .then(data => setCountryInfo(data));
    }
  }, [props.country]);

  if (!props.country) {
    return null;
  }

  if (!countryInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{countryInfo.name}</h2>
      <table>
        <tbody>
          <tr>
            <td>Capital:</td>
            <td>{countryInfo.capital}</td>
          </tr>
          <tr>
            <td>Population:</td>
            <td>{countryInfo.population}</td>
          </tr>
          <tr>
            <td>Currencies:</td>
            <td>{countryInfo.currencies.map((currency) => currency.name).join(', ')}</td>
          </tr>
          <tr>
            <td>Languages:</td>
            <td>{countryInfo.languages.map((language) => language.name).join(', ')}</td>
          </tr>
          <tr>
            <td>Flag:</td>
            <td><img src={countryInfo.flag} alt={`${props.country} flag`} width="100px" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default CountryInfo;