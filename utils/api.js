const fetch = require('node-fetch');
const { STANDINGS_URL, SERVER_API, EVENTS_URL, NEWS_URL, TEAM_STATS_URL } = require('../utils/config');

function checkServerResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(res)
}

function _getAndInsert(url, route) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST
    }
  })
  .then(checkServerResponse)
  .then((i) => {
    debugger
    _insertInitData(i.data, route);
    _logCalls({ date: new Date(), route: url }, 'apicalls');
  })
  .catch((err) => console.log(err))
}

function _getAndUpdate(url, route) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.API_KEY,
      /* 'X-RapidAPI-Host': process.env.API_HOST */
    }
  })
  .then(checkServerResponse)
  .then((i) => {
    debugger
    const data = i.data === undefined ? i.value : i.data;
    _updateData(data, route);
    _logCalls({ date: new Date(), route: url }, 'apicalls');
  })
  .catch((err) => console.log(err))
}

function _updateData(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(checkServerResponse)
  .catch((err) => console.log(err))
}

//log queris to rapid api
function _logCalls(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(checkServerResponse)
  .catch((err) => console.log(err))
}

//add new data to DB
function _insertInitData(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(checkServerResponse)
  .catch((err) => console.log(err))
}

//updating league table
function updateStandings() {
  fetch(STANDINGS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST
    }
  })
  .then(checkServerResponse)
  .then((i) => {
    _updateData(i.data[0].standings_rows, 'standings');//update data in league table
    _logCalls({ date: new Date(), route: STANDINGS_URL }, 'apicalls');//logging api calls
  })
  .catch((err) => console.log(err))
}


//add new table to DB
function addEvents() {
  _getAndInsert(EVENTS_URL, 'events');
}

//add new table to DB
function addStandigs() {
  _getAndInsert(STANDINGS_URL, 'standings');
}

function updateStandings() {
  _getAndUpdate(STANDINGS_URL, 'standings');
}

function updateEvents() {
  _getAndUpdate(EVENTS_URL, 'events');
}

function updateNews() {
  _getAndUpdate(NEWS_URL, 'news');
}

function updateTeamStats() {
  _getAndUpdate(TEAM_STATS_URL, 'team-stats');
}


module.exports = { updateStandings, updateEvents, addEvents, addStandigs, updateNews, updateTeamStats };
