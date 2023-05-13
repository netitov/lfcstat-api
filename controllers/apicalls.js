const apiCall = require('../models/apiCall');

const getApiCalls = (req, res, next) => {
  apiCall.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const insertApiCall = (req, res, next) => {
  const { date, route } = req.body;
  // debugger
  apiCall.create({ date, route })
    .then((i) => res.send(i))
    .catch((err) => {
      throw err;
    })
    .catch(next);
};

module.exports = { insertApiCall, getApiCalls };
