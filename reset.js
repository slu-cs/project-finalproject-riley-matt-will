const mongoose = require('mongoose');
const connect = require('./db');
// const Course = require('./models/stats');
const Team = require('./teams');

// Connect to the database
connect();

// Model a collection of courses
// const courses = [
//   new Course({_id: });
// ];
const teams = [
  new Team({
    id: 'testTeam',
    teamName: 'Test Team',
    teamScore: 0
  });
]

// Reset the database
mongoose.connection.dropDatabase()
  // .then(() => Promise.all(courses.map(stats => stats.save())))
  .then(() => Promise.all(teams.map(teams => teams.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
