const Event = require('../models/event');

const getData = (req, res, next) => {
  Event.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const insertData = (req, res, next) => {
  const table = req.body.map((i) => {
    const round = i.round_info === null ? i.round_number : i.round_info.name;
    const homeScore = i.home_score === null ? 0 : i.home_score.current;
    const awayScore = i.away_score === null ? 0 : i.away_score.current;
    return {
      id: i.id,
      challenge: i.challenge.name,
      roundInfo: round,
      startAt: i.start_at,
      status: i.status,
      homeTeamId: i.home_team_id,
      awayTeamId: i.away_team_id,
      homeScore: homeScore,
      awayScore: awayScore
    }
  })
  Event.create(table)
    .then((i) => res.send(i))
    .catch((err) => {
      throw err;
    })
    .catch(next);
};

const updateData = (req, res) => {
  req.body.forEach((i) => {
    const round = i.round_info === null ? i.round_number : i.round_info.name;
    const homeScore = i.home_score === null ? 0 : i.home_score.current;
    const awayScore = i.away_score === null ? 0 : i.away_score.current;
    Event.findOneAndUpdate({ 'id': i.id }, {
      '$set': {
        'id': i.id,
        'challenge': i.challenge.name,
        'roundInfo': round,
        'startAt': i.start_at,
        'status': i.status,
        'homeTeamId': i.home_team_id,
        'awayTeamId': i.away_team_id,
        'homeScore': homeScore,
        'awayScore': awayScore
      }
    }, { upsert : true })
      .then(() => {
        console.log('Ok')
      })
      .catch((err) => {
        console.log(err)
      })
  })
  res.send(['ok']);
};

module.exports = { getData, insertData, updateData };
