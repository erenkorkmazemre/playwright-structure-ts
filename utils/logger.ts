import { transports, format, createLogger } from 'winston';

const options = {
    level: 'info',
    transports: [
        new transports.Console({
            level: 'info'
        }),
        new transports.File({
            filename: 'test-results/logs/log.log',
            level: 'info',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            format: format.combine(
                format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                format.align(),
                format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
            )
        })
    ]
};

const logger = createLogger(options);

export default logger;
