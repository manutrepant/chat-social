const express = require('express')
const router = express.Router()

const {LOGIN} = require('../config.js')

router.get('/', (req, res, next) => {
    res.render('login', LOGIN)
})

module.exports = router