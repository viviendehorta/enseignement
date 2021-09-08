const express = require('express');
const addresses = require('./data/addresses');

const app = express();

app.use(express.static('/home/runner/mesadresses/public'))

app.get('/address/list', (req, res) => {
  res.json(addresses)
});

app.listen(3000, () => {
  console.log('server started')
});