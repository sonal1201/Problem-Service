const baseError = require("./baseError");

class notImplementedError extends baseError {
    constructor(methodName) {
        super("notImplementedError", 501, `${methodName} not implemented`, {})
    }
}

module.exports = notImplementedError