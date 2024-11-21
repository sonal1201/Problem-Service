const express = require('express');
const {  problemController } = require('../../controllers');

const problemRoutes = express.Router();

problemRoutes.get('/ping',problemController.ping);

problemRoutes.post('/',problemController.addProblem);

problemRoutes.get('/:id',problemController.getProblem);

problemRoutes.get('/',problemController.getProblems);

problemRoutes.put('/:id',problemController.updateProblem);

problemRoutes.delete('/:id',problemController.deleteProblem);




module.exports = problemRoutes