const fetch = require('node-fetch');
const {
  STANDINGS_URL, SERVER_API, EVENTS_URL, NEWS_URL, TEAM_STATS_URL, YOUTUBE_URL, PLAYER_STATS_URL,
} = require('./config');

function checkServerResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

// add new data to DB
function insertInitData(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(checkServerResponse)
    .catch((err) => console.log(err));
}

function updateData(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(checkServerResponse)
    .catch((err) => console.log(err));
}

function getAndInsert(url, route) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST,
    },
  })
    .then(checkServerResponse)
    .then((i) => {
      insertInitData(i.data, route);
      logCalls({ date: new Date(), route: url }, 'apicalls');
    })
    .catch((err) => console.log(err));
}

function getAndUpdate(url, route) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.API_KEY,
      /* 'X-RapidAPI-Host': process.env.API_HOST */
    },
  })
    .then(checkServerResponse)
    .then((i) => {
      const data = i.data === undefined ? i.value : i.data;
      updateData(data, route);
      logCalls({ date: new Date(), route: url }, 'apicalls');
    })
    .catch((err) => console.log(err));
}

function getAndUpdateVideo(url, route) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(checkServerResponse)
    .then((i) => {
      updateData(i.items, route);
      logCalls({ date: new Date(), route: url }, 'apicalls');
    })
    .catch((err) => console.log(err));
}

function deleteData(route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(checkServerResponse)
  // .then(() => getAndUpdate(NEWS_URL, route))
    .catch((err) => console.log(err));
}

// log queris to rapid api
function logCalls(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(checkServerResponse)
    .catch((err) => console.log(err));
}

// add new table to DB
function addEvents() {
  getAndInsert(EVENTS_URL, 'events');
}

// add new table to DB
function addStandigs() {
  getAndInsert(STANDINGS_URL, 'standings');
}

function updateStandings() {
  getAndUpdate(STANDINGS_URL, 'standings');
}

function updateEvents() {
  getAndUpdate(EVENTS_URL, 'events');
}

function updateNews() {
  deleteData('news');
  getAndUpdate(NEWS_URL, 'news');
}

function updateTeamStats() {
  getAndUpdate(TEAM_STATS_URL, 'team-stats');
}

function updateVideo() {
  deleteData('videos');
  getAndUpdateVideo(YOUTUBE_URL, 'videos');
}

function updatePlayerStats() {
  getAndUpdate(PLAYER_STATS_URL, 'player-stats');
}

module.exports = {
  updateStandings,
  updateEvents,
  addEvents,
  addStandigs,
  updateNews,
  updateTeamStats,
  updateVideo,
  updatePlayerStats,
};
