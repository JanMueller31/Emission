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
    if (req.query.autoBaujahr != null && req.query.autoBaujahr !== '') {
        searchOptions.baujahr = req.query.autoBaujahr
    }
    if (req.query.autoLeistung != null && req.query.autoLeistung !== '') {
        searchOptions.leistung = req.query.autoLeistung
    }
    if (req.query.autoKraftstoffart != null && req.query.autoKraftstoffart !== '') {
        searchOptions.kraftstoffart = req.query.autoKraftstoffart
    }
    if (req.query.autoKraftstoffverbrauch != null && req.query.autoKraftstoffverbrauch !== '') {
        searchOptions.verbrauch = req.query.autoKraftstoffverbrauch
    }
    if (req.query.autoSchadstoffklasse != null && req.query.autoSchadstoffklasse !== '') {
        searchOptions.schadstoffklasse = req.query.autoSchadstoffklasse
    }
    if (req.query.autoEmissionWLTP != null && req.query.autoEmissionWLTP !== '') {
        searchOptions.emissionWLTP = req.query.autoEmissionWLTP
    }
    if (req.query.autoEmissionNEFZ != null && req.query.autoEmissionNEFZ !== '') {
        searchOptions.emissionNEFZ = req.query.autoEmissionNEFZ
    }
    
    cars = find(searchOptions) 
    res.render('results',{
        autos: cars,
        searchOptions: req.query
    })
})

router.get('/car/:id', (req,res)=>{
    let searchOptions = {}
    searchOptions.id = req.params.id
    auto = find(searchOptions)
    res.render('auto', {
        car: auto,
        searchOptions: ""
    })
})

module.exports = router