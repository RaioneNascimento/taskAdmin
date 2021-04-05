const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'API online' })
})

module.exports = app