'use strict'

const express = require('express')
const helmet = require('helmet')
const log = require('./src/utils/logger')
const apiRoutes = require('./src/routes')

log.info('Starting the express app');
const app = express()
app.use(helmet())

app.use('/api/v1', apiRoutes)

// Set listeting port
const port = process.env.PORT || 3000

app.listen(port, () => log.info(`APP is ready and runing on port ${port}`))