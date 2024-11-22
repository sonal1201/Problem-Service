const { format } = require('winston')
const winston = require('winston')

const allowedTransport = [];
allowedTransport.push(new winston.transports.Console({
    format: winston.format.combine(
        // 1st Arg for Colorize Levels
        winston.format.colorize(),
        // 2st Arg timeStanp
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // 3nd Arg printing Log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransport.push(new winston.transports.File({
    filename: 'errors.log',
    format: winston.format.combine(
        // 1st Arg timeStanp
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // 2nd Arg printing Log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    )
}));

//Default Format
const logger = winston.createLogger({
    format: winston.format.combine(
        // 1st Arg timeStamp
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // 2nd Arg printing Log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    ),
    transports: allowedTransport

})

module.exports = logger