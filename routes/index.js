// Requirements
const express = require('express');
// Notes routes
const notesRouter = require('./notes');

const api = express();

api.use('/notes', notesRouter);

module.exports = api;