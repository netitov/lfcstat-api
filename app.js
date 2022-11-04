const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const standingsRoute = require('./routes/standings');


const { PORT = 3004 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/pltable', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());


app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', standingsRoute);


app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
