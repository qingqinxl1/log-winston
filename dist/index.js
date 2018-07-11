'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

require('winston-daily-rotate-file');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    printf = _winston.format.printf;

var myFormat = printf(function (info) {
  return info.timestamp + ' ' + (info.label ? '[' + info.label + ']' : '') + ' ' + info.level + ': ' + info.message;
});

// 读取配置文件
var config = void 0;
try {
  config = JSON.parse(_fs2.default.readFileSync(_path2.default.join(process.cwd(), 'logconfig.json'), 'utf8'));
} catch (e) {
  throw new Error(e);
}

// 每日滚动日志创建并初始化配置信息
var filename = config.logPath ? config.logPath + config.filename || 'log.%DATE%.log' : config.filename || 'log.%DATE%.log';
var transport = new _winston.transports.DailyRotateFile({
  filename: filename,
  datePattern: config.datePattern || 'YYYY-MM-DD-HH',
  maxSize: config.maxSize,
  maxFiles: config.maxFiles
});

transport.on('rotate', function (oldFilename, newFilename) {
  // @TODO 新的日志生成时想干点啥？
});

var logger = (0, _winston.createLogger)({
  transports: [transport],
  format: combine(label({ label: config.label ? config.label : '' }), timestamp(), myFormat)
});

// 若不是生产环境输出日志在终端
if (process.env.NODE_ENV !== 'production') {
  logger.add(new _winston.transports.Console({
    format: combine(_winston.format.colorize(), myFormat)
  }));
}

exports.default = logger;
