const winston = require('winston')
const rotateLog = require('winston-daily-rotate-file')
const fs = require('fs')
const log_dir = 'logs'

// Create log folder if not exists
if (!fs.existsSync(log_dir)) {
  fs.mkdirSync(log_dir)
}

const log = new winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    }),
    new (rotateLog)({
      filename: './logs/app.log',
      prepend: true
    })
  ],
  level: 'info'
})

module.exports = log