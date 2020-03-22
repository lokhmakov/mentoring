import {render} from 'react-dom'
import * as React from 'react'

const list = ['cusine', 'protein', 'salad', 'snack', 'starch']

function App() {
  const [checked, setChecked] = React.useState(null)

  return list.map(name => (
    <input
      key={name}
      type="checkbox"
      checked={name === checked}
      onChange={() => setChecked(name)}
    />
  ))
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
