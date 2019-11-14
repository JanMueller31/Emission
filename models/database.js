const fs = require('fs')
const xml2js = require('xml2js')
const xmlParser = xml2js.Parser({
    explicitArray: false
})

function populateDatabase() {
    var databaseData = fs.readFileSync(__dirname + '/datenbank.xml', 'utf8', (err, data) => {
        if (err) console.log(err);
    })
    xmlParser.parseString(databaseData, (err, result) => {
        if (err) console.log(err)
        databaseData = result
    })
    return databaseData
}
var database = populateDatabase()

module.exports = database