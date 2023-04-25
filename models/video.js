const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  id: { type: String },
  date: { type: String },
  title: { type: String },

});

module.exports = mongoose.model('video', videoSchema);
