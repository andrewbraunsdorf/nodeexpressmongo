console.log('Server code running');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// serve files from the public directory
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/clicks');
mongoose.Promise = global.Promise;

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});