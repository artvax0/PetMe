import config from 'config'
import morgan from 'morgan'
import currentTime from '../utils/formatTime.js';
import chalk from 'chalk';

const logger = config.get('LOGGER');
const now = currentTime();

const morganLogger = () => {
  return morgan(function (tokens, req, res) {
    const log = [
      `[${now.year}/${now.month}/${now.day} ${now.hours}:${now.minutes}:${now.seconds}]`,
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ');
    return res.statusCode >= 400 ? chalk.red(log) : chalk.cyan(log);
  })
}

const logRequests = () => {
  if (logger === 'morgan') {
    return morganLogger();
  }
}

export default logRequests;