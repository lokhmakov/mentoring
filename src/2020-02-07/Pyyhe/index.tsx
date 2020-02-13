import {render} from 'react-dom'
import * as React from 'react'
import json from './restaurants.json'

async function query() {
  const data = json.restaurants.reduce((r, doc) => ((r[doc.id] = doc), r), {})
  return {
    data,
    order: Object.keys(data),
  }
}

function Item({doc}) {
  return (
    <div>
      <div>{doc.name}</div>
      <div>{doc.description}</div>
    </div>
  )
}

const App = () => {
  const [data, setData] = React.useState({})
  const [order, setOrder] = React.useState([])

  React.useEffect(() => {
    async function fetch() {
      const r = await query()

      setData(r.data)
      setOrder(r.order)
    }

    fetch()
  }, [])

  const onClick = () => {
    const compare = (a, b) => a.localeCompare(b)

    setOrder(list =>
      [...list].sort((b, a) => compare(data[a].name, data[b].name)),
    )
  }

  return (
    <div>
      <button onClick={onClick}>Click</button>
      {order.map(id => (
        <Item key={id} doc={data[id]} />
      ))}
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
