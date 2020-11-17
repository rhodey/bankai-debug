const hypercore = require('hypercore')
const ram = require('random-access-memory')

function store(state, emitter) {
  state.core = null
  state.count = 0

  emitter.on('DOMContentLoaded', function () {
    const core = hypercore(() => ram(), { valueEncoding: 'utf-8' })
    core.once('error', console.error)
    core.once('ready', function () {
      state.core = core
      emitter.emit(state.events.RENDER)
    })
  })

  emitter.on('append', function () {
    state.core.append(state.core.length + 1, function (err) {
      if (err) {
        console.error(err)
      } else {
        state.count = state.core.length
        emitter.emit(state.events.RENDER)
      }
    })
  })
}

module.exports = store
