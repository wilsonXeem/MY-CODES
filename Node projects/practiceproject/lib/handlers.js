const db = require('../db')

exports.home = (req, res) => res.render('home')
exports.about = (req, res) => res.render('about')

exports.formdynamic = (req, res) => {
    res.render('form-dynamic', { csrf: 'CSRF token goes here' })
}
exports.api = {
    form: (req, res) => {
        console.log('Form (from querystring): ' + req.query.form)
        console.log('CSRF token (from hidden form field): ' + req.body._csrf)
        console.log('Name (from visible form field): ' + req.body.name)
        console.log('Email (from visible form field): ' + req.body.email)
        console.log('Department (from visible form field): ' + req.body.department)
        res.send({result: 'success'})
    }
}
exports.formlistenerprocess = async(req, res) => {
    const {name, email, department} = req.body
    await db.formlistener(name, email, department)
}

exports.notfound = (req, res) => res.render('404')
exports.servererror = (req, res) => res.render('500')