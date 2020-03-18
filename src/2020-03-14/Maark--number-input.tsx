import {render} from 'react-dom'
import * as React from 'react'

const App = () => {
  const [value, setValue] = React.useState(``)

  function onChange({target: {value}}) {
    if (value.length < 10 && /^\d*,?\d*$/.test(value)) {
      setValue(value)
    }
  }

  return <input type="number" value={value} onChange={onChange} />
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
