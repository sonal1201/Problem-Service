//Custom ErrorHandler

const baseError = require("../errors/baseError");

function errorHandler(err, req, res, next) {
    if (err instanceof baseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        });
    }

    return res.status(401).json({
        success: false,
        message: "Something Went Wrong",
        error: err,
        data: {}
    });
}

module.exports = errorHandler