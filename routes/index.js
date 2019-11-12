const express = require('express')
const router = express.Router()
const db = require('../models/model')
const find = require('../models/dataFind')
//db = JSON.stringify(database)

router.get('/', (req,res) => {
    res.render('index',{
        autoModell: null,
        searchOptions: req.body
    })
})

router.get('/search', (req,res) => {
    let searchOptions = {}
    if (req.query.modell != null && req.query.modell !== '') {
      searchOptions.modell = req.query.modell
    }
    if (req.query.marke != null && req.query.marke !== '') {
        searchOptions.marke = req.query.marke
      }
    cars = find(searchOptions) 
    res.render('results',{
        autos: cars,
        searchOptions: req.query
    })
})

router.get('/car/:id', (req,res)=>{
    auto = find(req.params.id)
    res.render('car', {
        car: auto[0]
    })
})

module.exports = router