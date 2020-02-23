import React from 'react'

const shopifyProduct = {
  title: 'Single Point Lyra',
  options: [
    {
      name: 'Size',
      values: ['small', 'medium', 'large'],
    },
    {
      name: 'Color',
      values: ['black', 'white'],
    },
  ],
  variants: [
    {
      shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg2MDQxNDIxODM0Mw==',
      title: 'small / black',
      selectedOptions: [
        {
          name: 'Size',
          value: 'small',
        },
        {
          name: 'Color',
          value: 'black',
        },
      ],
    },
    {
      shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg2MDQxNDI1MTExMQ==',
      title: 'small / white',
      selectedOptions: [
        {
          name: 'Size',
          value: 'small',
        },
        {
          name: 'Color',
          value: 'white',
        },
      ],
    },
    {
      shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg2MDQxNDI4Mzg3OQ==',
      title: 'medium / black',
      selectedOptions: [
        {
          name: 'Size',
          value: 'medium',
        },
        {
          name: 'Color',
          value: 'black',
        },
      ],
    },
    {
      shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg2MDQxNDMxNjY0Nw==',
      title: 'medium / white',
      selectedOptions: [
        {
          name: 'Size',
          value: 'medium',
        },
        {
          name: 'Color',
          value: 'white',
        },
      ],
    },
    {
      shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg2MDQxNDM0OTQxNQ==',
      title: 'large / black',
      selectedOptions: [
        {
          name: 'Size',
          value: 'large',
        },
        {
          name: 'Color',
          value: 'black',
        },
      ],
    },
    {
      shopifyId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTg2MDQxNDM4MjE4Mw==',
      title: 'large / white',
      selectedOptions: [
        {
          name: 'Size',
          value: 'large',
        },
        {
          name: 'Color',
          value: 'white',
        },
      ],
    },
  ],
}

function Select({list, doc, onChange}) {
  return (
    <select onChange={({target: {value}}) => onChange({value})}>
      {list.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

function Options({list, onChange}) {
  if (list.length < 1) return null

  return list.map((doc, index) => (
    <div name={doc.name} className="mt-4" key={`${doc.name}_${index}`}>
      <label>Select {doc.name}:</label>
      <Select
        list={doc.values}
        onChange={({value}) => {
          onChange({type: doc.name, value})
        }}
      />
    </div>
  ))
}

export function Product() {
  const [options, setOptions] = React.useState({})
  const [vairant, setVariant] = React.useState(null)

  function onChange({type, value}) {
    setOptions(state => ({...state, [type]: value}))
  }

  React.useEffect(() => {
    const {Size, Color} = options

    console.log(`Size`, Size)
    console.log(`Color`, Color)

    if (Size && Color) {
      console.log(`BLA`)
      const variant = shopifyProduct.variants.find(doc => {
        return doc.selectedOptions.every(
          ({name, value}) => value === options[name],
        )
      })
      console.log(variant)
    }

    setVariant(null)
  }, [options])

  return (
    <div>
      <h1>{shopifyProduct.title}</h1>
      <Options list={shopifyProduct.options} onChange={onChange} />
      <button>Add to cart</button>
    </div>
  )
}
