const express = require('express')
const router = express.Router()
const { Champions } = require('../db')


router.get('/', (req, res, next) => {
    res.sendFile('/public')
})

router.get('/champions', async (req, res, next) => {
    const champions = await Champions.findAll()
    res.send(champions)
})

router.get('/champions/:id', async (req, res, next) => {
    const champion = await Champions.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send(champion)
})

module.exports = router