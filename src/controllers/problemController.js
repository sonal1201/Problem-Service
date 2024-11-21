const notImplementedError = require("../errors/notImplementedError");
const serviceUnavailabe = require("../errors/serviceUnavailable");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");

const problemService = new ProblemService(new ProblemRepository)
function ping(req, res) {
    return res.send({ msg: "Ping Checked" })
}

async function addProblem(req, res, next) {

    try {
        const newProblem = await problemService.createProblem(req.body);
        res.status(201).json({
            success: true,
            message: "Problem Sucessfully Created",
            error: {},
            data: newProblem,
        })


    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {

    try {
        const problem = await problemService.getProblem(req.params.id);

        res.status(201).send({
            sucess: true,
            message: "Problem Fetched SuccessFully",
            error: {},
            data: problem

        })
    } catch (error) {
        next(error)
    }

}

async function getProblems(req, res, next) {
    try {

        const problems = await problemService.getAllproblems();
        res.status(201).send({
            success: true,
            message: "fetched All Problems",
            error: {},
            data: problems
        })
    } catch (error) {
        next(error)

    }

}

async function deleteProblem(req, res, next) {


    try {
        const deleteProblem = await problemService.deleteProblem(req.params.id);
        res.status(201).send({
            success: true,
            messege: "Problem delete SucessFully",
            error: {},
            data: deleteProblem
        })
    } catch (error) {
        next(error)
    }


}

async function updateProblem(req, res, next) {
    try {
        const update_Problem = await problemService.updateProblem(req.params.id, req.body);
        res.status(201).send({
            success: true,
            message: "Problem Updated successFully",
            error:{},
            data: update_Problem
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    ping,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}