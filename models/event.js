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
    type: Date,
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
  homeScore: {
    type: Number,
  },
  awayScore: {
    type: Number,
  },
});

module.exports = mongoose.model('event', eventSchema);
