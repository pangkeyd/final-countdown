'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const routes = require('./routes/routes.js');

require('dotenv').config();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes)

app.listen(3000, console.log('listening on port 3000'));
