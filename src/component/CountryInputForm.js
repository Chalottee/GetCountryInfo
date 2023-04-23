import React, { useState } from 'react';
import './CountryInputForm.css';


function CountryInputForm(props) {
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(country);
  }

  return (
    <div className="country-input-form-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter country name" 
          value={country} 
          onChange={(event) => setCountry(event.target.value)} />
        <button type="submit">Get Country Info</button>
      </form>
    </div>
  );
}

export default CountryInputForm;