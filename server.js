const express = require('express');
const routes = require('./src/routes');
const logger = require('morgan');

require('dotenv').config();

const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8080;

// Used to parse json for requests of type application/json
app.use(express.json());

// Used morgan for logging purposes.
app.use(logger('dev'));

// Using /api as the default route for the APIs
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
