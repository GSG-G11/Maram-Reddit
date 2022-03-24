require('env2')('.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('PORT', process.env.PORT || 3000);
module.exports = app;
