const baseError = require("./baseError");

class notFoundError extends baseError{
    constructor(details){
        super("Not Found Error",404,"Resource Not Found",details)
    }

}

module.exports = notFoundError