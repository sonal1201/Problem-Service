const baseError = require("./baseError");

class internalServerError extends baseError {
    constructor(details) {
        super("InternalServerError", 500, `SomeThing Went Wrong!!`, details)
    }
}

module.exports = internalServerError