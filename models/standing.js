const mongoose = require('mongoose');

const standingSchema = new mongoose.Schema({
  teamId: {
    type: Number,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  matches: {
    type: Number,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
  },
  losses: {
    type: Number,
    required: true,
  },
  draws: {
    type: Number,
    required: true,
  },
  goalsSc: {
    type: Number,
    required: true,
  },
  goalsCon: {
    type: Number,
    required: true,
  },
  scoreDif: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model('standing', standingSchema);
