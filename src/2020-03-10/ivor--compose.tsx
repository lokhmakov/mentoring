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

console.log(JSON.stringify(process(h.Sheet1), null, 2))
