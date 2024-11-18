const notImplementedError = require("../errors/notImplementedError");
const serviceUnavailabe = require("../errors/serviceUnavailable");

function ping(req, res) {
    return res.send({ msg: "Ping Checked" })
}

function addProblem(req, res, next) {

    try {
        throw new notImplementedError('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res,next) {  
    return res.status(501).json({
        Message: "Not Implemented"
    })

}

function getProblems(req, res,next) {
    try {
        throw new serviceUnavailabe('getProblems')
    } catch (error) {
        next(error)

    }

}

function deleteProblem(req, res) {
    return res.status(501).json({
        Message: "Not Implemented"
    })


}

function updateProblem(req, res) {
    return res.status(501).json({
        Message: "Not Implemented"
    })

}


module.exports = {
    ping,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}