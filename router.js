const express = require('express');
const courses = require('./controllers/stats');

// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

// Handle course requests
router.get('/stats', stats.index);
router.get('/stats/:id', stats.retrieve);
router.post('/stats', authorize, stats.create);
router.delete('/stats/:id', authorize, stats.delete);
router.put('/stats/:id', authorize, stats.update);

// Export the router
module.exports = router;
