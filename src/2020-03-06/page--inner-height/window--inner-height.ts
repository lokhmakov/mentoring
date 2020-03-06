import {createStore, createEvent, createEffect} from 'effector'
import {useStore} from 'effector-react'

const EVENT_RESIZE = `resize`

const on = {
  set: createEvent<Number>(),
}

const $ = {
  value: createStore<Number>(window.innerHeight).on(on.set, (_, v) => v),
}

function onResize() {
  on.set(window.innerHeight)
}

const run = {
  enable: createEffect<void, void, Error>({
    handler() {
      window.addEventListener(EVENT_RESIZE, onResize)
    },
  }),
  disable: createEffect<void, void, Error>({
    handler() {
      window.removeEventListener(EVENT_RESIZE, onResize)
    },
  }),
}

export const from = {
  $,
  on,
  run,
  use: {
    innerHeight: () => useStore($.value), // eslint-disable-line
  },
}

run.enable()
