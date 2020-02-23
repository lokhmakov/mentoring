import {render} from 'react-dom'
import * as React from 'react'
import {Product} from './product'

function App() {
  return <Product />
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
