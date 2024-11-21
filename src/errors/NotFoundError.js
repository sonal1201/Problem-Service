const baseError = require("./baseError");

class notFoundError extends baseError {
    constructor(resourceName, resourceValue) {
        super("Not Found Error", 404, `${resourceName}: not found with value: ${resourceValue}`, {
            resourceName, resourceValue
        })
    }

}

module.exports = notFoundError