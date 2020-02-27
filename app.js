'use strict'

const express = require('express')
const helmet = require('helmet')
const apiRoutes = require('./src/routes')

const app = express()
app.use(helmet())

app.use('/api/v1', apiRoutes)

// Set listeting port
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`APP runing on port ${port}`))