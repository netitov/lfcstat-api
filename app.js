const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const standingsRoute = require('./routes/standings');
const apiCallsRouter = require('./routes/apicalls');
const eventsRouter = require('./routes/events');
const newsRouter = require('./routes/news');
const teamStatsRouter = require('./routes/teamStats');
const videosRouter = require('./routes/videos');
const { updateStandings, updateEvents, addEvents, addStandigs, updateNews, updateTeamStats, updateVideo } = require('./utils/api');

const { PORT = 3004 } = process.env;
const app = express();


mongoose.connect('mongodb://localhost:27017/lfcstats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
//app.use(bodyParser.json());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', standingsRoute);
app.use('/', apiCallsRouter);
app.use('/', eventsRouter);
app.use('/', newsRouter);
app.use('/', teamStatsRouter);
app.use('/', videosRouter);

function getData() {
  console.log('Hi!')
}

function test2() {
  const interval = setInterval(getData, 5000);
  return () => clearInterval(interval);
}

//test2()

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
  //updateStandings();
  //updateEvents();
  //updateNews();
  //updateTeamStats();
  //updateVideo();
});

