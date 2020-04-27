// Router for a team collection
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database
let teams = [
  {teamName: 'testTeam', teamScore: 0}
];

// GET /teams
router.get('/', function(request, response) {
  if (request.query.teamName) {
    response.send(teams.filter(f => f.teamName === request.query.teamName));
  } else {
    response.send(teams);
  }
});

// GET /teams/teamName
router.get('/:teamName', function(request, response, next) {
  const team = teams.find(f => f.teamName === request.params.teamName);
  if (!team) {
    next(); // Leads to 404
  } else {
    response.send(team);
  }
});

// POST /teams
router.post('/', function(request, response) {
  const team = request.body;
  if (!team.teamName) {
    response.status(400).send('Missing Name');
  } else if (teams.find(f => f.teamName === team.teamName)) {
    response.status(400).send('Duplicate Name');
  } else {
    teams.push(team);
    response.status(201).send(teams);
  }
});

// DELETE /teams/teamName
router.delete('/:teamName', function(request, response, next) {
  const team = teams.find(f => f.teamName === request.params.teamName);
  if (!team) {
    next(); // Leads to 404
  } else {
    teams = teams.filter(f => f.teamName !== team.teamName);
    response.status(200).send(teams);
  }
});

// PUT /teams/teamName
router.put('/:teamName', function(request, response, next) {
  const team = teams.find(f => f.teamName === request.params.teamName);
  if (!team) {
    next(); // Leads to 404
  } else {
    if (request.body.teamName) {
      team.teamName = request.body.teamName;
      team.teamScore = 0;
    }
    response.status(200).send(teams);
  }
});

module.exports = router;
