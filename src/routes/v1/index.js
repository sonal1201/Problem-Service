const express = require('express');
const problemRoutes = require('./problemRoutes');


const v1Router = express.Router();

v1Router.use('/problems', problemRoutes)

module.exports = v1Router