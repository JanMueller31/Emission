const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use('/', indexRouter)

const databaseAutohaus = require('./models/database').autohaus
var totalCarList = []

for (i = 0; i < databaseAutohaus.auto.length; i++){
    totalCarList.push(databaseAutohaus.auto[i])
}


app.listen(3000, () => console.log('Server Started'))