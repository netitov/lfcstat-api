const Standing = require('../models/standing');

const getStandings = (req, res, next) => {
  Standing.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const insertStandings = (req, res, next) => {
  const data = req.body[0].standings_rows;
  const table = data.map((i) => ({
    teamId: i.team.id,
    teamName: i.team.name_short,
    position: i.position,
    logo: i.team.logo,
    matches: i.fields.matches_total,
    wins: i.fields.wins_total,
    losses: i.fields.losses_total,
    draws: i.fields.draws_total,
    goalsSc: i.fields.goals_total.split(':')[0],
    goalsCon: i.fields.goals_total.split(':')[1],
    scoreDif: i.fields.goals_total.split(':')[0] - i.fields.goals_total.split(':')[1],
    points: i.fields.points_total,
  }));
  Standing.create(table)
    .then((i) => res.send(i))
    .catch((err) => {
      throw err;
    })
    .catch(next);
};

const updateStandings = (req, res) => {
  const data = req.body[0].standings_rows;
  data.forEach((i) => {
    Standing.findOneAndUpdate({ teamId: i.team.id }, {
      $set: {
        teamId: i.team.id,
        teamName: i.team.name_short,
        position: i.position,
        logo: i.team.logo,
        matches: i.fields.matches_total,
        wins: i.fields.wins_total,
        losses: i.fields.losses_total,
        draws: i.fields.draws_total,
        goalsSc: i.fields.goals_total.split(':')[0],
        goalsCon: i.fields.goals_total.split(':')[1],
        scoreDif: i.fields.goals_total.split(':')[0] - i.fields.goals_total.split(':')[1],
        points: i.fields.points_total,
      },
    }, { upsert: true })
      .then((i) => {
        console.log(i);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  res.send(['ok']);
};

module.exports = { getStandings, insertStandings, updateStandings };
