// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static('./dist/backyardfrontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/weddingappfrontendangular/'}),
);

// Start the app by listening on the dault heroku port
app.listen(process.env.PORT || 8080);