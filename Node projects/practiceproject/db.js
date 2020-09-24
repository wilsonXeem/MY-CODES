const mongoose = require('mongoose')
const formlistener = require('./models/formlistener')

const url = 'mongodb://127.0.0.1:27017/my-project'
if (!url) {
    console.error('Mongo connection string missing!')
    process.exit(1)
}
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', err => {
    console.error('MongoDB error: ' + err.message)
    process.exit(1)
})
db.once('open', () => console.log('MongoDB connection established'))

module.exports = {
    addformlistener: async (name, email, department) => {
        await formlistener.updateOne(
            { name },
            { email },
            { department }
        )
    },
}