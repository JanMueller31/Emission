const databaseAutohaus = require('./database').autohaus

var totalCarList = []

for (i = 0; i < databaseAutohaus.auto.length; i++){
    totalCarList.push(databaseAutohaus.auto[i])
}

function find(searchOptions){
    let carArrayResults = []
    //falls keine searchOptions angegeben, gib alle Fahrzeuge aus
    if(Object.keys(searchOptions).length == 0){
        carArrayResults = totalCarList
    }

    //Iteration über alle Elemente
    for (i = 0; i < totalCarList.length;i++) {
        let treffer = true

        //check ob Marke angegeben und setzt treffer auf false falls nicht übereinstimmend
        if (searchOptions.marke !== undefined && searchOptions.marke != ' '){
            if (searchOptions.marke != totalCarList[i].zulassungsbescheinigung.marke._) {
                treffer = false
            }
        }
        //check ob Modell angegeben und setzt treffer auf false falls nicht übereinstimmend
        if (searchOptions.modell !== undefined && searchOptions.modell != ' '){
            if (searchOptions.modell != totalCarList[i].zulassungsbescheinigung.modell._) {
                treffer = false
            }
        }
        //check ob KMStand angegeben und setzt treffer auf false falls kmstand des Autos größer als der der Abfrage
        if (searchOptions.KMStand !== undefined) {
            if (parseFloat(searchOptions.KMStand) < parseFloat(totalCarList[i].fahrzeugdaten.kmstand.wert)) {
                treffer = false
            }
        }
        if (searchOptions.preis !== undefined) {
            if (parseFloat(searchOptions.preis) < parseFloat(totalCarList[i].fahrzeugdaten.preis.wert)) {
                treffer = false
            }
        }
        if (searchOptions.baujahr !== undefined) {
            if (parseFloat(searchOptions.baujahr) > parseFloat(totalCarList[i].zulassungsbescheinigung.baujahr._)) {
                treffer = false
            }
        }
        if (searchOptions.leistung !== undefined) {
            if (parseFloat(searchOptions.leistung) > parseFloat(totalCarList[i].fahrzeugdaten.leistung.wert)) {
                treffer = false
            }
        }
        if (searchOptions.kraftstoffart !== undefined && searchOptions.kraftstoffart != ' '){
            if (searchOptions.kraftstoffart !== totalCarList[i].zulassungsbescheinigung.kraftstoffart._) {
                treffer = false
            }
        }
        if (searchOptions.verbrauch !== undefined) {
            if (parseFloat(searchOptions.verbrauch) < parseFloat(totalCarList[i].emissionsdaten.nefz.vebrauch.kombiniert.wert)) {
                treffer = false
            }
        }
        if (searchOptions.schadstoffklasse !== undefined && searchOptions.schadstoffklasse != ' '){
            if (searchOptions.schadstoffklasse != totalCarList[i].zulassungsbescheinigung.schadstoffklasse._) {
                treffer = false
            }
        }
        if (searchOptions.emissionNEFZ !== undefined) {
            if (parseFloat(searchOptions.emissionNEFZ) < parseFloat(totalCarList[i].emissionsdaten.nefz.co2_emission_kombi.wert)) {
                treffer = false
            }
        }
        if (searchOptions.emissionWLTP !== undefined) {
            if (parseFloat(searchOptions.emissionWLTP) < parseFloat(totalCarList[i].emissionsdaten.wltp.co2_emission_kombi.wert)) {
                treffer = false
            }
        }


        //falls Teffer -> push ins auszuliefernde Array
        if(treffer) {
            if (carArrayResults == "") {
                carArrayResults.push(totalCarList[i]);
            } else {
                let alreadyInCarArrayResults = false
                for (j = 0;j < carArrayResults.length;j++){
                    if (totalCarList[i] === carArrayResults[j]){
                        alreadyInCarArrayResults = true;
                        break;
                    }
                }
                if (!alreadyInCarArrayResults) {
                    carArrayResults.push(totalCarList[i]);
                }            
            }
        } //Ende if(treffer)
    } //Ende for-Schleife             



    //needed for individual page
    for (i = 0; i < totalCarList.length;i ++){
        if (searchOptions == totalCarList[i].$.id) {
            carArrayResults.push(totalCarList[i]);
        }
    }

    return carArrayResults
}//Ende find()

module.exports = find