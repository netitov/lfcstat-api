const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

  id: {
    type: Number,
  },
  challenge: {
    type: String,
  },
  roundInfo: {
    type: String,
  },
  startAt: {
    type: String,
  },
  status: {
    type: String,
  },
  homeTeamId: {
    type: Number,
  },
  awayTeamId: {
    type: Number,
  },
  homeTeamName: {
    type: String,
  },
  awayTeamName: {
    type: String,
  },
  homeTeamLogo: {
    type: String,
  },
  awayTeamLogo: {
    type: String,
  },
  homeScore: {
    type: Number,
  },
  awayScore: {
    type: Number,
  },
});

module.exports = mongoose.model('event', eventSchema);
