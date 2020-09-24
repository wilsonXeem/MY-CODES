const mongoose = require('mongoose')

const formlistenerschema = mongoose.Schema({
    name: String,
    email: String,
    department: String,
})

const formlistener = mongoose.model('formlistener', formlistenerschema)
module.exports = formlistener