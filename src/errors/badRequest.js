const baseError = require("./baseError");

class badRequest extends baseError{
    constructor(propertyName){
        super("BadRequest",400,`Invalid Stracture for ${propertyName} provided`,details)
    }
}

module.exports = badRequest