/* eslint no-console:0 */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { API_PORT } = require('../constants');
// const ENV = process.env.NODE_ENV || 'development';

app.set('x-powered-by', false);
app.use(morgan('common'));
app.use(cors());
app.use('/dist', express.static('/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.get('/api', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(API_PORT);
console.log(`Listening to port ${API_PORT}`);
