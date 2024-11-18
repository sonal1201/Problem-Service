const baseError = require("./baseError");

class serviceUnavailabe extends baseError {
    constructor(methodName) {
        super("serviceUnavailabe", 502,"down for maintenance",methodName)

    }
}

module.exports = serviceUnavailabe