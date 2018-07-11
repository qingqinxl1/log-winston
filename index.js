import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';
import fs from 'fs';

const { combine, timestamp, label, printf } = format;
const myFormat = printf(info => {
  return `${info.timestamp} ${info.label ? '[' + info.label + ']' : ''} ${info.level}: ${info.message}`;
});


// 读取配置文件
let config;
try {
  config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'logconfig.json'), 'utf8'));
} catch (e) {
  throw new Error(e);
}

// 每日滚动日志创建并初始化配置信息
const transport = new (transports.DailyRotateFile)({
  filename: config.filename || 'log-%DATE%.log',
  datePattern: config.datePattern || 'YYYY-MM-DD-HH',
  maxSize: config.maxSize,
  maxFiles: config.maxFiles,
});

transport.on('rotate', function (oldFilename, newFilename) {
  // @TODO 新的日志生成时想干点啥？
});

const logger = createLogger({
  transports: [
    transport
  ],
  format: combine(
    label({ label: config.label ? config.label : '' }),
    timestamp(),
    myFormat
  ),
});

// 若不是生产环境输出日志在终端
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      format.colorize(),
      myFormat
    ),
  }));
}

export default logger;