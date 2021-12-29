import { sleep } from './sleep';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, align } = format;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        align(),
        printf((log: any) => {
            return `[${log.level}] ${log.timestamp}: ${log.message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' })
    ]
})

const content = `node: ${process.env.NODE_ENV}, instance: ${process.env.INSTANCE}, port: ${process.env.PORT}`;

app.get('/', (req: any, res: any) => {
    logger.info(`start /`);
    logger.info(content);
    return res.send(content);
});
  
app.get('/sleep', async (req: any, res: any) => {
    logger.info(`start /sleep`);
    logger.info(content);
    await sleep(120 * 1000);
    logger.info(`end /sleep`);
    return res.send('end sleep');
});

app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
});