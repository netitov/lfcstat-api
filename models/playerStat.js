const mongoose = require('mongoose');

const playerStatSchema = new mongoose.Schema({
  /* tournament: { type: String },
  year: { type: String },
  metric: { type: String },
  id: { type: String },
  player: { type: String },
  value: { type: Number },
  position: { type: String },
  appearances: { type: Number }, */

  id: String,
  tournament: String,
  year: String,
  data: Object

});

module.exports = mongoose.model('playerStat', playerStatSchema);
