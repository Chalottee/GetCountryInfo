import React, { useState } from 'react';
import CountryInfo from './component/CountryInfo';
import CountryInputForm from './component/CountryInputForm';

function App() {
  const [country, setCountry] = useState('');

  const handleSubmit = (country) => {
    setCountry(country);
  }

  return (
    <div className="App">
      <CountryInputForm onSubmit={handleSubmit} />
      <CountryInfo country={country} />
    </div>
  );
}

export default App;