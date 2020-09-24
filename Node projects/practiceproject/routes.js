const handlers = require('./lib/handlers')

module.exports = app => {
    app.get('/', handlers.home)
    app.get('/about', handlers.about)
    app.get('/form-dynamic', handlers.formdynamic)
    app.post('/api/form', handlers.api.form)
    app.use(handlers.notfound)
    app.use(handlers.servererror)
}