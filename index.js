const babel = require('babel-polyfill')
const choo = require('choo')
const app = choo()

app.use(require('./store.js'))
app.route('/', require('./main.js'))

module.exports = app.mount('body')
