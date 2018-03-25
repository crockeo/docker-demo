var express   = require('express'),
    mysql     = require('mysql'),
    sequelize = require('sequelize');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello world!');
});

app.listen(8000, (err) => {
  if (err) {
    console.log('Failed to launch server.');
    console.log(err);
  } else
    console.log('Server started on :80');
});
