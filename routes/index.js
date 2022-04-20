const routes = require('express').Router();
const jokes = require('../controllers/');

// routes.get('/', jokes.displayJoke); // gets the path (home) and grabs the function from the controller

routes.get('/', (req, res) => {
    res.send('Riley Skinner');
});

module.exports = routes;