import winston from 'winston'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint()
    ),
    transports: [
        new winston.transports.Console()
    ]
})

export default logger