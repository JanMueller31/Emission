const express = require('express')
const router = express.Router()
const find = require('../models/dataQuery')

router.get('/', (req,res) => {
    res.render('index',{
        autoModell: null,
        searchOptions: ""
    })
})

router.get('/search', (req,res) => {
    let searchOptions = {}
    if (req.query.suche != null && req.query.suche !== '') {
        searchOptions.suche = req.query.suche
      }
    if (req.query.autoMarke != null && req.query.autoMarke !== '') {
      searchOptions.marke = req.query.autoMarke
    }
    if (req.query.autoModell != null && req.query.autoModell !== '') {
        searchOptions.modell = req.query.autoModell
    }
    if (req.query.autoKMStand != null && req.query.autoKMStand !== '') {
        searchOptions.KMStand = req.query.autoKMStand
    }
    if (req.query.autoPreis != null && req.query.autoPreis !== '') {
        searchOptions.preis = req.query.autoPreis
    }
    if (req.query.autoFahrzeugklasse != null && req.query.autoFahrzeugklasse !== '') {
        searchOptions.fahrzeugklasse = req.query.autoFahrzeugklasse
    }
    if (req.query.autoKraftstoffart != null && req.query.autoKraftstoffart !== '') {
        searchOptions.kraftstoffart = req.query.autoKraftstoffart
    }
    if (req.query.autoSchadstoffklasse != null && req.query.autoSchadstoffklasse !== '') {
        searchOptions.schadstoffklasse = req.query.autoSchadstoffklasse
    }
    if (req.query.autoEmission != null && req.query.autoEmission !== '') {
        searchOptions.emission = req.query.autoEmission
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
        car: auto[0],
        searchOptions: req.query
    })
})

module.exports = router