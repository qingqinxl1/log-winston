### 基于winston的log日志封装
1. 安装
`npm i log-winston`

2. 项目目录下需要放置logconfig.json配置文件
```
// logPath: 日志输出目录，若为空则输出到当前目录
// fileName: 日志名称
// datePattern: 日志输出后缀格式
// maxSize: 每篇日志输出最大字节数，若不设置则不限制输出大小，单位为k/m/g
// maxFiles: 日志最多保留的天数，若不设置则不做任何日志的删除，单位为d
// label: 输出日志语句中的标签，可以为空
{
  "logPath": "E:\\",
  "filename": "log.%DATE%.log",
  "datePattern": "YYYY-MM-DD",
  "maxSize": "20m",
  "maxFiles": "14d",
  "label": "winston examples"
}
```

3. 调用方式
```
import logger from 'log-winston';
// 或者使用
// const logger = require('log-winston/dist').default;

logger.info('some description info');
logger.warn('some warning');
logger.error('something wrong and will be exit');
```

4. 参与开发流程
> 修改index.js

> `npm run build`

> `npm run demo`

5. 日志级别输出为info及以下