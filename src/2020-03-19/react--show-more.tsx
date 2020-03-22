import {render} from 'react-dom'
import * as React from 'react'
import styled from 'styled-components'

const A = {}

function Show({
  children,
  lineHeight = 2.5,
  lines = 3,
  isMore = false,
  ...props
}) {
  return (
    <A.Base
      as={!isMore && A.Show}
      style={{
        '--height': `${(lines + 1) * lineHeight}ex`,
        '--line-height': `${lineHeight}ex`,
      }}
      {...props}
    >
      <p>{children}</p>
    </A.Base>
  )
}

function App() {
  const [isMore, setIsMore] = React.useState(false)

  return (
    <>
      <Show lines={2} isMore={isMore} onClick={() => setIsMore(v => !v)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Show>
      <Show>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Show>
    </>
  )
}

A.Base = styled.div`
  position: relative;
  overflow: hidden;
  line-height: var(--line-height, 2.5ex);
`

A.Show = styled(A.Base)`
  height: var(--height, 7.5ex);

  &:after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 2.5ex;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`

const rootElement = document.getElementById('root')
render(<App />, rootElement)
