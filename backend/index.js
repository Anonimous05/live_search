const express = require('express');
const cors = require('cors');
const fileData = require('./fileData');
const config = require('./config');
const search = require('./app/search');
const details = require('./app/details');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/',search);
app.use('/details',details);

const run = async () => {
  await fileData.initProcessors();
  app.listen(config.port);
};

run().catch(error => {
   console.log(error);
});