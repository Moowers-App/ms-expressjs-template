'use strict'
const express = require('express')

const app = express()

// Set listeting port
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`APP runing on port ${port}`))