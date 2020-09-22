const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const db = require('./db')
const routes = require('./routes/routes')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "..", 'public')))

app.use('/', routes)

const PORT = 3000

app.listen(PORT, () => {
    db.syncAndSeed(),
    console.log(`Listening on Port ${PORT}`)
})

