import 'winston-daily-rotate-file';
import winston, { format, transports } from 'winston';

import { ENV } from '#src/configs/env';
import CommonHelper from '#src/helpers/common';
import { LoggerEnums } from '../../enums/logger';

const { combine, printf, colorize, json, timestamp } = format;

const printFn = ({ level, message, stack }: any): string => {
  const timestamp = CommonHelper.formattedTimestamp();
  if (stack) {
    return `${level}: ${timestamp}:=> ${message}\n stack:-${stack}`;
  }
  return `${level}: ${timestamp}:=> ${message}`;
};

const consoleFormat = printf(printFn);

/**
 * Contain all the error logs.
 */
const errorTransport = new transports.DailyRotateFile({
  filename: 'error-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  zippedArchive: false,
  maxSize: '100m',
  maxFiles: '30d',
  dirname: 'logs',
  level: 'error',
});

/**
 * Contain all the logs.
 */
const combinedTransport = new transports.DailyRotateFile({
  filename: 'combined-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  zippedArchive: false,
  maxSize: '200m',
  dirname: 'logs',
  maxFiles: '30d',
});

// const logger = winston.createLogger({
//   level: LoggerEnums,
// });
