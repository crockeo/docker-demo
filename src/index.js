var express   = require('express'),
    Sequelize = require('sequelize');

// Ensuring that we have the required environment variables to construct the
// Sequelize instance.
if (process.env.DB === null || process.env.DB_USER == null || process.env.DB_PASS == null) {
  console.log('Failed to start Node.js server; does not have required ' +
              'environment variables for the database.\n')

  process.exit(1);
}

// Constructing the Sequelize instance.
var sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

var app = express();

app.use(express.static(__dirname + '/content'));

app.get('/api/test_db_connection', (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.status(200).send('Success!');
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
      res.status(500).send('Failure! :(\n' + err);
    });
});

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.log('Failed to launch server.');
    console.log(err);
  } else
    console.log('Server started on :' + port);
});
