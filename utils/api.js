const fetch = require('node-fetch');
const { RAPID_API_PL, SERVER_API } = require('../utils/config');

function checkServerResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(res)
}

//updating league table
function updateStandings() {
  fetch(RAPID_API_PL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST
    }
  })
  .then(checkServerResponse)
  .then((i) => {
    updateData(i.data[0].standings_rows, 'standings');//update data in league table
    insertData({ date: new Date(), route: RAPID_API_PL }, 'apicalls');//logging api calls
  })
  .catch((err) => console.log(err))
}


function updateData(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(checkServerResponse)
  .catch((err) => console.log(err))
}


function insertData(data, route) {
  fetch(`${SERVER_API}/${route}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(checkServerResponse)
  .catch((err) => console.log(err))
}



module.exports = { updateStandings };
