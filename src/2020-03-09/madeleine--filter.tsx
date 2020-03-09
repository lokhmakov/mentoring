import {render} from 'react-dom'
import * as React from 'react'

const from = {}

const yearList = [`2019`, `2018`]

function Row({doc}) {
  return <div>{doc.receiptNumber}</div>
}

function Year({value, current, ...props}) {
  const fontWeight = current === value ? `bold` : undefined

  return (
    <div style={{fontWeight}} {...props}>
      {value}
    </div>
  )
}

function App() {
  const [data, setData] = React.useState({})
  const [order, setOrder] = React.useState([])
  const [year, setYear] = React.useState(null)

  React.useEffect(() => {
    const nextData = from.data.reduce((r, v, i) => ((r[i] = v), r), {})
    setData(nextData)
    setOrder(Object.keys(nextData))
  }, [])

  React.useEffect(() => {
    if (year) {
      const list = Object.keys(data)
      setOrder(list.filter(id => data[id].date.includes(year)))
    }
  }, [data, year])

  return (
    <>
      {yearList.map(value => (
        <Year
          key={value}
          value={value}
          current={year}
          onClick={() => setYear(value)}
        />
      ))}
      {order.map(id => (
        <Row key={id} doc={data[id]} />
      ))}
    </>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)

from.data = [
  {
    date: '2020-03-04, 10:14',
    receiptNumber: '256-5-549284',
    store: 'H&M',
    total: 249.0,
    quantity: 1,
  },
  {
    date: '2018-05-27, 17:53',
    receiptNumber: '517-4-557647',
    store: 'IKEA',
    total: 899.0,
    quantity: 1,
  },
  {
    date: '2020-01-15, 15:18',
    receiptNumber: '575-2-635819',
    store: 'Zara',
    total: 4037.5,
    quantity: 3,
  },
  {
    date: '2019-11-26, 12:07',
    receiptNumber: '968-8-257964',
    store: 'Lagerhaus',
    total: 1600.0,
    quantity: 5,
  },
  {
    date: '2020-02-29, 23:59',
    receiptNumber: '364-4-218378',
    store: 'Tesco',
    total: 194.35,
    quantity: 1,
  },
  {
    date: '2020-01-15, 15:18',
    receiptNumber: '575-2-635819',
    store: 'SportShop',
    total: 4037.5,
    quantity: 3,
  },
  {
    date: '2019-11-26, 12:07',
    receiptNumber: '968-8-257964',
    store: 'Lush',
    total: 1600.0,
    quantity: 5,
  },
  {
    date: '2016-02-29, 23:57',
    receiptNumber: '364-4-218378',
    store: 'The Body Shop',
    total: 194.35,
    quantity: 1,
  },
]
