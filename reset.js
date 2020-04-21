const mongoose = require('mongoose');
const connect = require('./db');
const Course = require('./models/stats');

// Connect to the database
connect();

// Model a collection of courses
const courses = [
  new Course({_id: });
];
// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(courses.map(stats => stats.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
