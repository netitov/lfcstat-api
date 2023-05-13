const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  source: {
    type: String,
  },
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('new', newSchema);
