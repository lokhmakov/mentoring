import {render} from 'react-dom'
import * as React from 'react'
import styled from 'styled-components'

import {from} from './window--inner-height'
import './index.css'

const A: any = {}

const App = () => {
  const innerHeight = from.use.innerHeight()

  return <A.Page style={{'--min-height': `${innerHeight}px`}}>Footer</A.Page>
}

A.Page = styled.div`
  display: flex;
  align-items: flex-end;

  min-height: 100vh;
  min-height: var(--min-height);
`

const rootElement = document.getElementById('root')
render(<App />, rootElement)
