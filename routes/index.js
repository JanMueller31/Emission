const express = require('express')
const router = express.Router()
const db = require('../models/model')
//db = JSON.stringify(database)

router.get('/', (req,res) => {
    res.render('cars')
})

router.get('/car', (req,res) => {

    

    res.render('index',{
        autoMarke:db.database.car[0].make,
        autoModell:db.database.car[0].model,
        autoEmission:db.database.car[0].emission,
    })
})

module.exports = router