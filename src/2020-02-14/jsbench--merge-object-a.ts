const case1 = list => list.reduce((r, v) => ({...r, ...v}))

const case2 = list => Object.assign.apply(Object, list)

const case3 = list => Object.assign(...list)

const case4 = list => list.reduce((r, v) => Object.assign(r, v))

const list = [
  {a: 1, b: 2},
  {c: 3, d: 4},
  {a: 1, b: 2},
  {c: 3, d: 4},
  {a: 1, b: 2},
  {c: 3, d: 4},
  {a: 1, b: 2},
  {c: 3, d: 4},
]
;[case1, case2, case3, case4].forEach(v => console.log(v(list)))
