import {render} from 'react-dom'
import * as React from 'react'

const EVENT_WHEEL = `wheel`
const DELTA = 2000

function App() {
  const [index, setIndex] = React.useState(1)
  const time = React.useRef(null)

  React.useEffect(() => {
    function onWheel(e) {
      const d = e.wheelDelta / 30 || -e.detail
      const timeCurrent = new Date().getTime()

      if (!time.current || time.current < timeCurrent - DELTA) {
        setIndex(v => v + Math.sign(d))
        time.current = timeCurrent
      }

      e.preventDefault()
    }

    window.addEventListener(EVENT_WHEEL, onWheel, {passive: false})

    return () => window.removeEventListener(EVENT_WHEEL, onWheel)
  }, [])

  return <div>{index}</div>
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
