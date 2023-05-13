const playerStat = require('../models/playerStat');

const getData = (req, res, next) => {
  playerStat.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const updateData = (req) => {
  const tournament = 'Premier League';
  const year = '22/23';
  const id = tournament + year;

  playerStat.findOneAndUpdate({ id }, {
    $set: {
      id,
      tournament,
      year,
      data: req.body,
    },
  }, { upsert: true })
    .then(console.log('ok'))
    .catch((err) => console.log(err));
};

module.exports = { getData, updateData };
