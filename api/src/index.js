const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const port = 3333

const server = require('./server');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/apptest`)
});