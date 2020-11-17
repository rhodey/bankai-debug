const choo = require('choo')
const app = choo()

app.use(require('./store.js'))
app.route('/', require('./view.js'))

module.exports = app.mount('body')
