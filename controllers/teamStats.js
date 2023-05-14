const teamStat = require('../models/teamStat');

const getData = (req, res, next) => {
  teamStat.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const updateData = (req, res) => {
  const data = req.body;
  teamStat.findOneAndUpdate({ id: '41886' }, {
    $set: {
      tournament: 'Premier League',
      year: '22/23',
      id: '41886',
      goalsScored: data.goalsScored,
      goalsConceded: data.goalsConceded,
      shots: data.shots,
      penaltiesTaken: data.penaltiesTaken,
      penaltyGoals: data.penaltyGoals,
      freeKickGoals: data.freeKickGoals,
      freeKickShots: data.freeKickShots,
      goalsFromInsideTheBox: data.goalsFromInsideTheBox,
      goalsFromOutsideTheBox: data.goalsFromOutsideTheBox,
      shotsFromInsideTheBox: data.shotsFromInsideTheBox,
      shotsFromOutsideTheBox: data.shotsFromOutsideTheBox,
      headedGoals: data.headedGoals,
      bigChancesCreated: data.bigChancesCreated,
      bigChancesMissed: data.bigChancesMissed,
      shotsOnTarget: data.shotsOnTarget,
      shotsOffTarget: data.shotsOffTarget,
      successfulDribbles: data.successfulDribbles,
      dribbleAttempts: data.dribbleAttempts,
      corners: data.corners,
      hitWoodwork: data.hitWoodwork, // штанги
      averageBallPossession: data.averageBallPossession,
      accuratePassesPercentage: data.accuratePassesPercentage,
      accurateOwnHalfPassesPercentage: data.accurateOwnHalfPassesPercentage,
      accurateOppositionHalfPassesPercentage: data.accurateOppositionHalfPassesPercentage,
      accurateLongBallsPercentage: data.accurateLongBallsPercentage,
      accurateCrossesPercentage: data.accurateCrossesPercentage,
      totalLongBalls: data.totalLongBalls,
      totalCrosses: data.totalCrosses,
      cleanSheets: data.cleanSheets,
      tackles: data.tackles, // отборы
      interceptions: data.interceptions, // перехваты
      errorsLeadingToGoal: data.errorsLeadingToGoal,
      penaltiesCommited: data.penaltiesCommited,
      duelsWonPercentage: data.duelsWonPercentage,
      groundDuelsWonPercentage: data.groundDuelsWonPercentage,
      offsides: data.offsides,
      fouls: data.fouls,
      yellowCards: data.yellowCards,
      redCards: data.redCards,
      avgRating: data.avgRating,
      bigChancesCreatedAgainst: data.bigChancesCreatedAgainst,
      shotsAgainst: data.shotsAgainst,
      shotsFromInsideTheBoxAgainst: data.shotsFromInsideTheBoxAgainst,
      shotsOnTargetAgainst: data.shotsOnTargetAgainst,
      yellowCardsAgainst: data.yellowCardsAgainst,
      matches: data.matches,
    },
  }, { upsert: true })
    .then(() => {
      console.log('Ok');
    })
    .catch((err) => {
      console.log(err);
    });

  res.send(['ok']);
};

module.exports = { getData, updateData };
