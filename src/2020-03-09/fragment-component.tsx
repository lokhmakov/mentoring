import {render} from 'react-dom'
import * as React from 'react'

const Fragment = v => v.children

function App() {
  return (
    <Fragment>
      `123`
      <div>
        123456
        <span>5</span>
      </div>
    </Fragment>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
