const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3333;

const { errors } = require('celebrate');

app.get('/', (req, res) => {
  res.send({ message: 'API online' })
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});