import {render} from 'react-dom'
import * as React from 'react'

const wait = s => new Promise(rs => setTimeout(rs, s * 1000))

async function query() {
  await wait(3)
  return [
    {id: 1, name: `name1`},
    {id: 2, name: `name2`},
    {id: 3, name: `name3`},
  ]
}

function App() {
  const [state, setState] = React.useState([{id: `0`, name: `name0`}])
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetch() {
      setLoading(true)
      const list = await query()
      setState(list)
      setLoading(false)
    }

    fetch()
  }, [])

  if (isLoading) return `isLoading`

  return (
    <div>
      {state.map(({id, name}) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
