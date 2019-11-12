// liest xml-Datei
// holt autos aus xml und erstellt array mit autos
// funktion zum filtern?
// schnittstelle: übergibt array
// funktion die filter entgegennimmt, z.b. eine marke und nachschaut ob feld "marke" vorhanden ist und falls ja
// dieses mit filter abgleicht und bei übereinstimmung in ein array übergibt und dieses am ende zurückliefert


const fs = require('fs')
const xml2js = require('xml2js')
const xmlParser = xml2js.Parser({
    explicitArray: false
})

function populateDatabaseWithData(){
    var databaseData = fs.readFileSync(__dirname + '/test.xml','utf8', (err,data)=>{
        if (err) console.log(err);
    })
    xmlParser.parseString(databaseData, (err,result)=>{
        if (err) console.log(err)
        databaseData = result
    })
    return databaseData
}
var database = populateDatabaseWithData()

module.exports = database