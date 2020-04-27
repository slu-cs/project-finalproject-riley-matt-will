const mongoose = require('mongoose');

// const Stats = new mongoose.Schema({
//   _id: String,
//   points: [String],
//   fantasypoints: [String],
//   Owner:[String]
// });

const Team = new mongoose.Schema({
  teamName: String,
  teamScore: Number
});

// module.exports = mongoose.model('Stats', stats);
module.exports = mongoose.model('Team', Team);
