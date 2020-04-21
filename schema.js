const mongoose = require('mongoose');

const Stats = new mongoose.Schema({
  _id: String,
  points: [String],
  fantasypoints: [String],
  Owner:[String]
});

module.exports = mongoose.model('Stats', stats);
