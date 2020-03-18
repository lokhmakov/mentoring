import {render} from 'react-dom'
import * as React from 'react'

const App = () => {
  const [file, setFile] = React.useState(null)

  const onChange = ({
    target: {
      files: [file],
    },
  }) => setFile(file)

  console.log(file)

  return (
    <>
      <input type="file" onChange={onChange} />
      {file?.size}
      {file?.size && (
        <p>
            <i>
            Video file size should be less or equal to 80MB
            </i>
        </p>
      )}
    </>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
