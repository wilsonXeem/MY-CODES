const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
require('./db')

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./routes')
routes(app)

const port = process.env.NODE || 2018
app.listen(port, () => {
    console.log(`server stated on port: ${port} ` + `on ${app.get('env')} mode`);
})
