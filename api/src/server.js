const express = require('express');
const app = express();

app.get('/apptest', (req, res) => {
  res.send({ message: 'App On' })
})

module.exports = app