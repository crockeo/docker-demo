var express   = require('express'),
    mysql     = require('mysql'),
    sequelize = require('sequelize');

var app = express();

app.use(express.static(__dirname + '/content'));

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.log('Failed to launch server.');
    console.log(err);
  } else
    console.log('Server started on :' + port);
});
