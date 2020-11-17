const html = require('choo/html')
const TITLE = 'Example'
module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  function append() {
    emit('append')
  }

  const button = state.core === null ?
    html`<button>wait...</button>`
    : html`<button onclick=${append}>append!</button>`

  return html`<body>
    <h2>Example</h2>
    <p>count: ${state.count}</p>
    ${button}
  </body>`
}
