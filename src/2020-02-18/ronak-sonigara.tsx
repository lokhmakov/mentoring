import {render} from 'react-dom'
import * as React from 'react'

function App() {
  const [state, setState] = React.useState([`first`, `second`])

  console.log(`state`, state)

  React.useEffect(() => {
    setState([`Update me`])
  }, [])

  return (
    <div>
      {state.map((name, key) => (
        <div key={key}>{name}</div>
      ))}
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
