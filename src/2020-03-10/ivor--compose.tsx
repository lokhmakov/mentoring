const h = {
  Sheet1: {
    region: ['Europe', 'America'],
    country: ['Spain', 'USA'],
    'order id': ['349742305', '897751939'],
    'item type': ['Vegetables', 'Household'],
    'ship date': ['01/04/10', '02/03/10'],
    'unit cost': ['90.93', '502.54'],
    'order date': ['01/04/10', '04/10/10'],
    'unit price': ['154.06', '668.27'],
    'units sold': ['5375', '3604'],
    'total profit': ['339323.75'],
    'sales channel': ['Online', 'Offline'],
    'total revenue': ['828072.5', '2408445.08'],
    'order priority': ['H', 'M'],
  },
}

const process = (data, keys = Object.keys(data)) =>
  Array.from({length: data[keys[0]].length}, (_, i) =>
    keys.reduce((r, v) => ((r[v] = data[v][i]), r), {}),
  )

const processFaramo = sheet => {
  const keys = Object.keys(sheet)
  const values = Object.values(sheet)
  const maxSize = values.reduce(
    (max, {length}) => (max < length ? length : max),
    values[0].length,
  )

  return values.reduce((acc, curr, i) => {
    let tmp = []

    for (let j = 0; j < maxSize; j++) {
      tmp.push({
        ...acc[j],
        [keys[i]]: curr[j] || null,
      })
    }

    return tmp
  }, [])
}

const processShirokuro = data =>
  Object.values(data).reduce(
    (result, sheet) => (
      Object.keys(sheet)
        .reduce(
          (bundle, key) => (
            Object.values(sheet[key]).reduce(
              (_, value, index) => ((bundle[index][key] = value), bundle),
              undefined,
            ),
            bundle
          ),
          Array.from(
            new Array(
              Object.keys(sheet).reduce(
                (max, key) => (
                  max < sheet[key].length ? (max = sheet[key].length) : max, max
                ),
                0,
              ),
            ),
            value => (
              Object.keys(sheet).reduce(
                (obj, key) => ((obj[key] = undefined), (value = obj)),
                {},
              ),
              value
            ),
          ),
        )
        .reduce((_, value) => result.push(value), undefined),
      result
    ),
    [],
  )

const caseList = [process, processFaramo]

caseList.forEach(fn => console.log(JSON.stringify(fn(h.Sheet1), null, 2)))

console.log(JSON.stringify(processShirokuro(h), null, 2))
