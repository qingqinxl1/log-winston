### winston node 日志
### 与log4js相比
1. github收获的星星多，10K多，log4js 3k
2. 按天输出日志
> winstonjs实现方式
```
require('winston-daily-rotate-file');

var transport = new (winston.transports.DailyRotateFile)({
	filename: 'winston-demo-%DATE%.log',
	datePattern: 'YYYY-MM-DD-HH',
	zippedArchive: true,
	maxSize: '20m',
	maxFiles: '14d'
});
...
```
> log4js可配置
```
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'dateFile', filename: 'cheese.log', }
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' }
  }
});
```
