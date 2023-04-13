const New = require('../models/new');

const getData = (req, res, next) => {
  New.find({})
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
      homeTeamName: i.home_team.name_short,
      awayTeamName: i.away_team.name_short,
      homeTeamLogo: i.home_team.logo,
      awayTeamLogo: i.away_team.logo,
      homeScore: homeScore,
      awayScore: awayScore
    }
  })
  New.create(table)
    .then((i) => res.send(i))
    .catch((err) => {
      throw err;
    })
    .catch(next);
};

const updateData = (req, res) => {
  req.body.forEach((i) => {
    const image = i.image === undefined ? '' : i.image.thumbnail.contentUrl;
    debugger
    console.log(image)
    New.findOneAndUpdate({ 'url': i.url }, {
      '$set': {
        'date': i.datePublished,
        'description': i.datePublished,
        'name': i.name,
        'image': image,
        'source': i.provider[0].name,
        'url': i.url
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
