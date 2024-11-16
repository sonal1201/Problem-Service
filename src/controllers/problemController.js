const notImplementedError = require("../errors/notImplementedError");

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

function getProblem(req, res) {
    return res.status(501).json({
        Message: "Not Implemented"
    })

}

function getProblems(req, res) {
    return res.status(501).json({
        Message: "Not Implemented"
    })

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