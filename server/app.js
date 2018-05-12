/* eslint no-console:0 */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
// const ENV = process.env.NODE_ENV || 'development';

app.use(morgan('common'));
app.use(cors());
app.use('/dist', express.static('/dist'));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(() => {
  console.log(`Listening to port ${PORT}`);
});
