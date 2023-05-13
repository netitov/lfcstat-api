const mongoose = require('mongoose');

const apiCallSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('apiCall', apiCallSchema);
