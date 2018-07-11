### 基于winston的log日志封装

1. 参与开发流程
> `npm i`

> 修改index.js

> `npm run build`

> `npm run demo`

2. 项目目录下需要放置logconfig.json配置文件
```json
{
  "logPath": "E:\\",
  "filename": "log.%DATE%.log",
  "datePattern": "YYYY-MM-DD",
  "maxSize": "20m",
  "maxFiles": "14d",
  "label": "winston examples"
}
```
