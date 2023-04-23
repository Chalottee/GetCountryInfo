const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/country/:name', async (req, res) => {
  const { name } = req.params;
  const response = await fetch(`https://restcountries.com/v2/name/${name}`);
  const data = await response.json();
  res.json(data[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});