class baseError extends Error {
    constructor(name, statusCode, description, details) {
        super(description)
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}

module.exports = baseError